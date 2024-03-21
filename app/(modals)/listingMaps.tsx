import { View, Text, StyleSheet } from "react-native";
import React, { useLayoutEffect, useMemo } from "react";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { defaultStyles } from "@/constants/Styles";
import { useNavigation, useRouter } from "expo-router";
import MapView from "react-native-maps";
import listingGeoData from "@/assets/data/airbnb-listings.geo.json";

const ListingsMap = () => {
  const router = useRouter();
  const listings = useMemo(() => listingGeoData as any, []);
  const onMarkSelected = (item: any) => {
    router.push(`/listing/${item.properties.id}`);
  };
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
    });
  }, []);
  return (
    <View style={defaultStyles.container}>
      <MapView
        style={StyleSheet.absoluteFill}
        showsUserLocation
        provider={PROVIDER_GOOGLE}
      >
        {listings.features.map((item: any) => (
          <Marker
            key={item.properties.id}
            coordinate={{
              longitude: +item.properties.longitude,
              latitude: +item.properties.latitude,
            }}
            onPress={() => onMarkSelected(item)}
          >
            <View style={styles.marker}>
              <Text style={styles.markerText}>€ {item.properties.price}</Text>
            </View>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 12,
    elevation: 5,
    shadowOpacity: 0.1,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
  markerText: {
    fontFamily: "mon-sb",
  },
});

export default ListingsMap;

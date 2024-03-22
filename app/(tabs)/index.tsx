import { View, StyleSheet, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { Stack, useRouter } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listing";
import listingData from "@/assets/data/airbnb-listings.json";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Colors from "@/constants/Colors";

const Page = () => {
  const [category, setCategory] = useState("Tiny Homes");
  const items = useMemo(() => listingData as any, []);
  const router = useRouter();

  const onDataChanged = (category: string) => {
    setCategory(category);
  };
  return (
    <View style={{ flex: 1, marginTop: 125 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader onCategoryChanged={onDataChanged} />,
        }}
      />
      <Listing listings={items} category={category} />
      <TouchableOpacity
        style={styles.mapBtn}
        onPress={() => router.push("/(modals)/listingMaps")}
      >
        <MaterialCommunityIcons
          name="map-search-outline"
          size={24}
          color={Colors.dark}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mapBtn: {
    position: "absolute",
    bottom: 20,
    right: "45%",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: Colors.grey,

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 10,
    },
  },
});

export default Page;

import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import userInfo from "@/assets/data/userProfile.json";

const Page = () => {
  const navigation = useNavigation();
  const height = StatusBar.currentHeight;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
      headerRight: () => (
        <TouchableOpacity
          style={{ marginRight: 10 }}
          onPress={() => navigation.goBack()}
        >
          <Text
            style={{
              fontSize: 15,
              fontFamily: "mon-sb",
              color: Colors.primary,
            }}
          >
            Save
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);
  return (
    <View style={[defaultStyles.container, { marginTop: height }]}>
      <View style={styles.infoContainer}>
        <View style={{ alignItems: "center", gap: 10 }}>
          <Image
            source={{ uri: userInfo.profile_picture_url }}
            style={styles.profileImg}
          />
          <Text style={{ fontSize: 15, fontFamily: "mon" }}>
            Member since {userInfo.member_since}
          </Text>
        </View>
      </View>
      <View style={styles.editContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Name</Text>
            <TextInput placeholder={userInfo.name} />
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Birth Day</Text>
            <TextInput placeholder={userInfo.birthdate} />
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Gender</Text>
            <TextInput placeholder={userInfo.gender} />
          </View>
          <View style={styles.divider} />
          <View style={{ paddingVertical: 10 }}>
            <Text style={styles.infoTitle}>Bio</Text>
            <TextInput
              multiline
              numberOfLines={4}
              maxLength={45}
              placeholder={userInfo.bio}
            />
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Location</Text>
            <TextInput placeholder={userInfo.location} />
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Language</Text>
            <TextInput placeholder={userInfo.language} />
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Email</Text>
            <TextInput placeholder={userInfo.email} />
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Phone</Text>
            <TextInput placeholder={userInfo.phone} />
          </View>
          <View style={styles.divider} />
          <View style={styles.infoBlock}>
            <Text style={styles.infoTitle}>Occupation</Text>
            <TextInput placeholder={userInfo.occupation} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    height: 160,
    padding: 30,
  },
  profileImg: {
    width: 90,
    height: 90,
    borderColor: Colors.primary,
    borderRadius: 90,
    borderWidth: 2,
  },
  editContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#000",
    borderRadius: 20,
    padding: 25,
  },
  divider: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: Colors.grey,
  },
  infoBlock: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  infoTitle: {
    fontSize: 15,
    fontFamily: "mon-sb",
  },
});
export default Page;

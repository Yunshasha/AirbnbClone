import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect, useMemo, useState } from "react";
import userInfo from "@/assets/data/userProfile.json";
import { Link, Stack, useNavigation } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";
import { Fontisto, Octicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import UserFuncs from "../(modals)/userFuncs";

const Page = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const height = StatusBar.currentHeight;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerTransparent: true,
    });
  }, []);
  const places = userInfo.your_places;
  const renderPlace = ({ item }: any) => (
    <View style={{ flex: 1, paddingRight: 15 }}>
      <Image source={{ uri: item.url }} style={styles.placePicture} />
    </View>
  );

  return (
    <View style={[defaultStyles.container, { marginTop: height }]}>
      <Stack.Screen options={{ headerShown: false }} />
      {modalVisible && (
        <UserFuncs
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
        />
      )}
      <View style={styles.infoContainer}>
        <TouchableOpacity
          style={{ position: "absolute", right: 30, top: 10, zIndex: 999999 }}
          onPress={() => setModalVisible(true)}
        >
          <Fontisto name="nav-icon-grid-a" size={24} color={Colors.primary} />
        </TouchableOpacity>

        <View style={{ alignItems: "center", gap: 10 }}>
          <Image
            source={{ uri: userInfo.profile_picture_url }}
            style={styles.profileImg}
          />

          <Text style={styles.userName}>{userInfo.name}</Text>
          <Link href={"/(modals)/editing"} asChild>
            <TouchableOpacity>
              <Text style={styles.editBtn}>Edit Profile</Text>
            </TouchableOpacity>
          </Link>
          <Text style={styles.description}>{userInfo.bio}</Text>
          <View
            style={{
              flexDirection: "row",
              paddingRight: 10,
            }}
          >
            <View style={styles.twoLine}>
              <Text style={styles.twoLine_firstLine}>LANGUAGE</Text>
              <Text style={styles.twoLine_secondLine}>{userInfo.language}</Text>
            </View>
            <View style={styles.twoLine}>
              <Text style={styles.twoLine_firstLine}>LOCATION</Text>
              <Text style={styles.twoLine_secondLine}>{userInfo.location}</Text>
            </View>
            <View style={styles.twoLine}>
              <Text style={styles.twoLine_firstLine}>MEMBER SINCE</Text>
              <Text style={styles.twoLine_secondLine}>
                {userInfo.member_since}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.spaceContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: 20,
          }}
        >
          <Text style={{ fontSize: 14, fontFamily: "mon-sb", color: "#fff" }}>
            Your Places
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 13, fontFamily: "mon-sb", color: "#fff" }}>
              Edit {">"}
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <FlatList
            renderItem={renderPlace}
            data={places}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 350,
          left: 40,
        }}
      >
        <View style={styles.verified}>
          <Octicons name="verified" size={50} color={Colors.primary} />
          <View style={{ flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 3,
                marginTop: 5,
              }}
            >
              <Text style={{ fontSize: 15, fontFamily: "mon-sb" }}>
                Get Verified
              </Text>
              <TouchableOpacity>
                <Text style={{ fontFamily: "mon-sb", color: Colors.primary }}>
                  3 steps left {">"}
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{ fontSize: 12, fontFamily: "mon", color: Colors.grey }}
            >
              We asked everyone for a few details before traveling or hosting,
              so get a hand started by doing it now.
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  infoContainer: {
    height: 400,
    padding: 30,
  },
  profileImg: {
    width: 90,
    height: 90,
    borderColor: Colors.primary,
    borderRadius: 90,
    borderWidth: 2,
  },
  userName: {
    fontSize: 22,
    fontFamily: "mon-sb",
    color: Colors.dark,
  },
  editBtn: {
    fontSize: 14,
    color: Colors.primary,
    fontFamily: "mon",
  },
  description: {
    paddingVertical: 10,
    fontSize: 13,
    fontFamily: "mon",
    color: Colors.grey,
  },
  twoLine: {
    flex: 1,
    alignItems: "center",
  },
  twoLine_firstLine: {
    fontSize: 13,
    fontFamily: "mon",
    color: Colors.primary,
  },
  twoLine_secondLine: {
    fontFamily: "mon-sb",
    color: Colors.grey,
    textAlign: "center",
  },
  spaceContainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: Colors.primary,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  placePicture: {
    height: 160,
    width: 160,
    borderRadius: 30,
  },
  verified: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    width: 320,
    height: 110,
    backgroundColor: "#fff",
    borderRadius: 30,
    alignItems: "center",
    paddingHorizontal: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default Page;

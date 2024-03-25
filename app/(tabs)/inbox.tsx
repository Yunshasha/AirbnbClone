import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";
import { defaultStyles } from "@/constants/Styles";
import Colors from "@/constants/Colors";

const height = StatusBar.currentHeight;

const Page = () => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerTransparent: true,
    });
  }, []);
  return (
    <SafeAreaView style={defaultStyles.container}>
      <View style={[defaultStyles.container, { marginTop: height }]}>
        <Text style={styles.inbox}>Inbox</Text>
        <Text
          style={{
            fontFamily: "mon",
            color: Colors.grey,
            fontSize: 15,
            marginTop: 8,
            paddingHorizontal: 14,
          }}
        >
          {" "}
          Messages from your host will appear here.
        </Text>
        <View style={{ marginHorizontal: 10 }}>
          <Image
            source={require("@/assets/images/inboxImg.png")}
            style={{ width: "100%" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inbox: {
    paddingHorizontal: 15,
    marginTop: 20,
    fontSize: 22,
    fontFamily: "mon-sb",
  },
});

export default Page;

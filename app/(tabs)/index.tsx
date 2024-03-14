import { Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import ExploreHeader from "@/components/ExploreHeader";
import Listing from "@/components/Listing";

const Page = () => {
  return (
    <View style={{ flex: 1 }}>
      <Stack.Screen
        options={{
          header: () => <ExploreHeader />,
        }}
      />
      <Listing />
    </View>
  );
};

export default Page;

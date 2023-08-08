import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Loading = () => {
  return (
    <View
      style={{
        justifyContent: "center",
      }}
    >
      <Text style={{ textAlign: "center" }}>
        <ActivityIndicator size="large" color="#37CFEE" />
      </Text>
    </View>
  );
};

export default Loading;

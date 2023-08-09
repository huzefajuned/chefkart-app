import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { primaryColor, secondaryColor } from "../colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity
        style={styles.btnContinue}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.btnText}>
          Continue <AntDesign name="arrowright" size={responsiveWidth(6)} />
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Landing;

const styles = StyleSheet.create({
  main: {
    // backgroundColor: "gray",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnContinue: {
    backgroundColor: secondaryColor,
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    justifyContent: "center",
    borderRadius: 10,
  },
  btnText: {
    color: primaryColor,
    textAlign: "center",
    fontSize: responsiveFontSize(3),
    padding: responsiveFontSize(1),
  },
});

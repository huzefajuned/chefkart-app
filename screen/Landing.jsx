import { Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { SafeAreaView } from "react-native-safe-area-context";
import { blackColor, primaryColor, secondaryColor } from "../colors";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.main}>
      <Image
        source={require("../assets/logo.png")}
        width={responsiveWidth(10)}
        height={responsiveHeight(10)}
        resizeMode="center"
      />
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
    backgroundColor: "white",
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  btnContinue: {
    backgroundColor: secondaryColor,
    borderColor: "#F8E8EE",
    borderWidth: 1,
    width: responsiveWidth(50),
    height: responsiveHeight(6),
    justifyContent: "center",
    borderRadius: 10,
    marginTop: responsiveHeight(40),
  },
  btnText: {
    color: blackColor,
    textAlign: "center",
    fontWeight: "600",
    fontSize: responsiveFontSize(3),
    padding: responsiveFontSize(0.6),
  },
});

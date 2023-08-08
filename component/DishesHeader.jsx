import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { blackColor, whiteColor } from "../colors";
import { AntDesign } from "@expo/vector-icons";

const DishesHeader = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.textStyle}>
        Recommended <AntDesign name="caretdown" size={responsiveFontSize(2)} />
      </Text>
      <TouchableOpacity style={styles.btns}>
        <Text style={styles.btnTextStyle}>Menu</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DishesHeader;

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    width: responsiveWidth(90),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textStyle: { fontSize: responsiveFontSize(2.3) },
  btns: {
    backgroundColor: blackColor,
    width: responsiveWidth(20),
    height: responsiveHeight(4),
    borderRadius: 5,
  },
  btnTextStyle: {
    color: whiteColor,
    fontSize: responsiveFontSize(2.2),
    textAlign: "center",
    alignItems: "center",
    padding: responsiveFontSize(0.2),
  },
});

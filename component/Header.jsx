import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { secondaryColor } from "../colors";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { MaterialIcons } from "@expo/vector-icons";

const Header = ({ title, goBackIcon, GoNextIcon }) => {
  return (
    <View style={styles.main}>
      {goBackIcon && (
        <TouchableOpacity style={styles.backIconStyle}>
          <MaterialIcons name="arrow-back-ios" size={responsiveWidth(7)} />
        </TouchableOpacity>
      )}
      {title && <Text style={styles.titleStyle}>{title}</Text>}
      {GoNextIcon && <Text>Go Bck</Text>}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  main: {
    justifyContent: "space-between",
    alignItems: "center",
    width: responsiveWidth(100),
    flexDirection: "row",
    justifyContent: "flex-start",
    gap: responsiveWidth(10),
  },
  backIconStyle: {
    marginLeft: responsiveWidth(5),
  },
  titleStyle: { fontSize: responsiveFontSize(3.5) },
  nextIconStyle: {},
});

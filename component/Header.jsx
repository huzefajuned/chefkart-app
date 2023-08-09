import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { secondaryColor } from "../colors";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Header = ({ title, backPath, goBackIcon, GoNextIcon }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      {goBackIcon && (
        <TouchableOpacity
          style={styles.backIconStyle}
          onPress={() => navigation.navigate(`${backPath}`)}
        >
          <MaterialIcons name="arrow-back-ios" size={responsiveWidth(6)} />
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
    // backgroundColor: "red",
    marginBottom: responsiveHeight(2),
  },
  backIconStyle: {
    marginLeft: responsiveWidth(5),
  },
  titleStyle: { fontSize: responsiveFontSize(3.2) },
  nextIconStyle: {},
});

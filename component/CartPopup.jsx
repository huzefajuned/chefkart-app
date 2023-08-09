import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { CartContext } from "../context";

const CartPopup = () => {
  const { cartItems } = useContext(CartContext);
  if (cartItems.length <= 0) {
    return;
  }
  return (
    <TouchableOpacity style={styles.main}>
      <Ionicons name="fast-food" size={responsiveFontSize(4)} color="white" />
      <Text style={styles.cartText}>
        {cartItems?.length} food items selected
      </Text>
      <AntDesign name="arrowright" size={responsiveFontSize(4)} color="white" />
    </TouchableOpacity>
  );
};

export default CartPopup;
const styles = StyleSheet.create({
  main: {
    backgroundColor: "#1C1C1C",
    width: responsiveWidth(70),
    height: responsiveHeight(5),
    borderRadius: 10,
    position: "absolute",
    bottom: 20,
    flexDirection: "row",
    gap: responsiveWidth(5),
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    textAlign: "center",
    color: "white",
    fontSize: responsiveFontSize(2),
  },
});

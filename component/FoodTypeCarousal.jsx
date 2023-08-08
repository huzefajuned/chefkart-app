import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { blackColor, borderColor, shadowkColor } from "../colors";

const foodTypes = [
  "Italian",
  "Indian",
  "South-Indian",
  "Bengali",
  "Chinese",
  "Noodles",
  "Bengal",
  "Chinese",
  "Noodles",
];

const FoodTypeCarousel = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carouselContent}
      >
        {foodTypes.map((food, index) => (
          <TouchableOpacity key={index} style={styles.oneFood}>
            <Text style={styles.foodText}>{food}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(7),
    paddingTop: responsiveHeight(1),
    height: responsiveHeight(8),
  },
  carouselContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(0),
  },
  oneFood: {
    width: responsiveWidth(30), // Adjust the width for better visibility
    height: responsiveHeight(5), // Set a fixed height for consistent sizing
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: responsiveWidth(1),
    borderRadius: responsiveFontSize(3),
    marginTop: responsiveHeight(0.5),
    borderColor: borderColor,
    borderWidth: 1,
    shadowColor: shadowkColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  foodText: {
    color: blackColor,
  },
});

export default FoodTypeCarousel;

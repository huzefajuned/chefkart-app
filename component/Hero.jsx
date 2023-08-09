import { View, Text, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import herbalpic from "../assets/herbal.png";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

const Hero = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Mashala Muglai</Text>
          <Text style={styles.subHeading}>
            Mughlai Masala is a style of cookery developed in the Indian
            Subcontinent by the imperial kitchens of the Mughal Empire.
          </Text>
          <Text style={styles.time}>1 hour</Text>
        </View>
        <ImageBackground source={herbalpic} style={styles.backgroundImage} />
      </View>

      <View style={styles.noPeople}>
        <Text style={{ fontSize: responsiveFontSize(2.3), fontWeight: "700" }}>
          Ingredients
        </Text>
        <Text>For 2 people</Text>
      </View>
    </>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    height: responsiveHeight(30),
    width: responsiveWidth(100),
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  content: {
    flexDirection: "column",
    justifyContent: "center",
    width: responsiveWidth(60),
    gap: responsiveHeight(1),
  },
  backgroundImage: {
    width: responsiveWidth(40),
    resizeMode: "cover",
    borderRadius: 50,
  },
  heading: {
    fontSize: responsiveFontSize(4),
    fontWeight: "700",
  },
  subHeading: {
    color: "#A3A3A3",
    fontSize: responsiveFontSize(1.4),
  },
  time: {
    marginTop: responsiveHeight(2),
    fontSize: responsiveFontSize(2),
  },

  //
  noPeople: {
    flexDirection: "column",
    paddingLeft: responsiveWidth(10),
    paddingBottom: responsiveHeight(1),
    borderBottomColor: "#A3A3A3",
    borderBottomWidth: 1,
  },
});

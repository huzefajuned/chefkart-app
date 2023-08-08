import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { borderColor, whiteColor } from "../colors";
import Loader from "../component/Loader";

const SingleDish = ({ dishes }) => {
  console.log("dishes inside singke", dishes[1]);

  return (
    <>
      {dishes.length <= 0 ? (
        <Loader />
      ) : (
        dishes?.map((dish) => {
          const { id, name, rating, image, description, equipments } = dish;
          return (
            <View key={id} style={styles.container}>
              <View style={styles.leftContainer}>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameText}>{name}</Text>
                  <Text>{rating}</Text>
                </View>
                <View style={styles.descriptionContainer}>
                  <Text style={styles.descriptionText}>{description}</Text>
                </View>
              </View>

              <View style={styles.rightContainer}>
                <Image source={{ uri: image }} style={styles.imageStyle} />
                <TouchableOpacity style={styles.btn}>
                  <Text style={styles.btnText}>ADD</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        })
      )}
    </>
  );
};

export default SingleDish;

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(90),
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: responsiveHeight(1),
    padding: 1,
    gap: 2,
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
  },
  leftContainer: { width: responsiveWidth(50) },
  rightContainer: {
    width: responsiveWidth(35),
    flexDirection: "column",
  },

  nameContainer: {
    flexDirection: "row",
    width: responsiveWidth(50),
    justifyContent: "space-between",
  },
  nameText: { fontSize: responsiveFontSize(2.4), fontWeight: "600" },
  descriptionContainer: { width: responsiveWidth(50) },
  descriptionText: {
    fontSize: responsiveFontSize(1.3),
    marginTop: responsiveHeight(5),
  },

  imageStyle: {
    width: responsiveWidth(35),
    height: responsiveWidth(25),
    objectFit: "cover",
    borderRadius: 10,
  },
  btn: {
    height: responsiveHeight(4.5),
    width: responsiveWidth(30),
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FF9A26",
    position: "relative",
    bottom: responsiveHeight(2),
    left: responsiveHeight(1.5),
    backgroundColor: whiteColor,
  },
  btnText: { textAlign: "center", color: "#FF8800" },
});

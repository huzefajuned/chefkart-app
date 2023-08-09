import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign, SimpleLineIcons } from "@expo/vector-icons";

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { borderColor, whiteColor } from "../colors";
import Loader from "../component/Loader";
import { useNavigation } from "@react-navigation/native";

export const refrigerator_Url =
  "https://www.pngmart.com/files/7/Refrigerator-Transparent-PNG.png";

export const microwave_Url =
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691179121/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/221297_0_so68z4.png?tr=w-360";

export const stove_Url =
  "https://www.myuniqueshop.in/cdn/shop/products/image-removebg-preview2_16e5fbd1-71e2-4acd-afab-01f9eb35d6a0_590x.png?v=1670571756";
const SingleDish = ({ dishes }) => {
  const navigation = useNavigation();

  if (dishes.length <= 0) {
    return <Loader />;
  }

  return (
    <>
      {dishes.map((dish) => {
        const { id, name, rating, image, description, equipments } = dish;

        return (
          <View key={id} style={styles.container}>
            <View style={styles.leftContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{rating}</Text>
                  <AntDesign
                    name="star"
                    size={responsiveFontSize(1.6)}
                    color="white"
                  />
                </View>
              </View>

              <View style={styles.ingredientContainer}>
                <View style={styles.equipmentContainer}>
                  {equipments.map((equipment, index) => {
                    return (
                      <View key={index} style={styles.equipmentItem}>
                        <Image
                          source={{
                            uri:
                              equipment === "Refrigerator"
                                ? refrigerator_Url
                                : equipment === "Microwave"
                                ? microwave_Url
                                : null,
                          }}
                          style={styles.equipmentImage}
                        />
                        <Text style={styles.equipmentName}>{equipment}</Text>
                      </View>
                    );
                  })}
                </View>
                <View>
                  <Text style={styles.ingredientText}>Ingredients</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate("ViewADish")}
                  >
                    <Text
                      style={{
                        fontSize: responsiveFontSize(1.5),
                        fontWeight: "500",
                        alignItems: "center",
                        textAlign: "center",
                        color: "#FFB72B",
                      }}
                    >
                      View List
                      <SimpleLineIcons
                        name="arrow-right"
                        size={responsiveFontSize(1)}
                        style={{ justifyContent: "center" }}
                      />
                    </Text>
                  </TouchableOpacity>
                </View>
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
      })}
    </>
  );
};

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
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#51C452",
    height: responsiveHeight(2.5),
    width: responsiveWidth(10),
    borderRadius: 5,
    paddingHorizontal: responsiveWidth(1),
  },
  ratingText: {
    fontSize: responsiveFontSize(1.8),
    color: "white",
    marginRight: responsiveWidth(0.5),
  },
  ingredientContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: responsiveHeight(1),
  },
  equipmentContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: responsiveWidth(1),
  },
  equipmentImage: {
    width: responsiveWidth(15),
    height: responsiveWidth(10),
    resizeMode: "contain",
  },
  equipmentItem: {
    alignItems: "center",
  },
  equipmentName: {
    marginTop: responsiveHeight(0.5),
    fontSize: responsiveFontSize(1.1),
    textAlign: "center",
  },
  ingredientText: {
    fontSize: responsiveFontSize(1.4),
    fontWeight: "bold",
    marginBottom: responsiveHeight(1),
  },
  nameContainer: {
    flexDirection: "row",
    width: responsiveWidth(50),
    justifyContent: "space-between",
  },
  nameText: { fontSize: responsiveFontSize(2), fontWeight: "500" },
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

export default SingleDish;

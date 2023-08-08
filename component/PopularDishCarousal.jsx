import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { blackColor, borderColor, shadowkColor } from "../colors";
import { fetchApi } from "../services";
import Loading from "./Loader";

const url =
  "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/";

const PopularDishCarousal = () => {
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    async function callApi() {
      try {
        const data = await fetchApi(url);
        await setDishes(data["popularDishes"]);
      } catch (error) {
        console.log("error", error);
      }
    }
    callApi();
  }, []);

  return (
    <>
      {dishes.length <= 0 ? (
        <Loading />
      ) : (
        <View style={styles.container}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.carouselContent}
          >
            {dishes?.map((food, index) => (
              <TouchableOpacity style={styles.oneFood} key={food.id}>
                <Image
                  source={{ uri: food?.image }}
                  style={styles.foodImage}
                  resizeMode="cover" // Ensure the image covers the entire TouchableOpacity
                />
                <Text style={styles.foodText}>{food.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: responsiveHeight(6),
    height: responsiveHeight(12),
  },
  carouselContent: {
    flexDirection: "row",
    paddingHorizontal: responsiveWidth(2),
  },
  oneFood: {
    width: responsiveWidth(20), // Adjust the width for better visibility
    height: responsiveWidth(20), // Adjust the width for better visibility

    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: responsiveWidth(1),
    borderColor: borderColor,
    borderWidth: 1,
    borderRadius: 50,
    overflow: "hidden", // Clip any content that goes beyond the borders
    shadowColor: shadowkColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  foodImage: {
    width: responsiveWidth(20),
    height: responsiveWidth(20),
  },
  foodText: {
    position: "absolute",
    bottom: "-25%",
    right: "-60%",
    transform: [{ translateX: -50 }, { translateY: -50 }],
    color: blackColor,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: responsiveFontSize(1),
    zIndex: 1, // Ensure text appears above the image
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Add a semi-transparent background
    paddingHorizontal: responsiveWidth(2),
    borderRadius: 8,
  },
});

export default PopularDishCarousal;

import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {
  responsiveWidth,
  responsiveHeight,
} from "react-native-responsive-dimensions";
import DishesHeader from "./DishesHeader";
import { fetchApi } from "../services";
import SingleDish from "./SingleDish";

const Dishes = () => {
  const url =
    "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/";
  const [dishes, setDishes] = useState([]);
  useEffect(() => {
    async function callApi() {
      try {
        const data = await fetchApi(url);
        await setDishes(data["dishes"]);
      } catch (error) {
        console.log("error", error);
      }
    }
    callApi();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <DishesHeader />
        <SingleDish dishes={dishes} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "red",
    padding: responsiveWidth(4),
    alignItems: "center",
    width: responsiveWidth(100),
  },
  scrollContent: {
    alignItems: "center",
    paddingVertical: responsiveHeight(2),
    // backgroundColor: "green", // Adjust the padding as needed
  },
});

export default Dishes;

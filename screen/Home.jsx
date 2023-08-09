import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { primaryColor } from "../colors";
import Header from "../component/Header";
import DateOrTime from "../component/DateOrTime";
import PopularDishCarousal from "../component/PopularDishCarousal";
import FoodTypeCarousal from "../component/FoodTypeCarousal";
import Dishes from "../component/Dishes";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView style={styles.main}>
      <Header
        goBackIcon={true}
        backPath="Landing"
        title="Select Dishes"
        GoNextIcon={false}
      />
      <DateOrTime />
      <FoodTypeCarousal />
      <PopularDishCarousal />
      <Dishes />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  main: {
    backgroundColor: primaryColor,
    flex: 1,
    alignItems: "center",
  },
});

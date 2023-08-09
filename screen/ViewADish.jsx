import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { fetchApi } from "../services";
import Header from "../component/Header";
import Hero from "../component/Hero";
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";

import Loading from "../component/Loader";
import { microwave_Url, refrigerator_Url, stove_Url } from "../constant";

//API
const url =
  "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1";
const ViewADish = () => {
  const [dish, setDish] = useState({});
  const appliances = dish["appliances"];
  const spices = dish["spices"];
  const vegetables = dish["vegetables"];
  useEffect(() => {
    async function callApiToFetch() {
      try {
        const data = await fetchApi(url);
        setDish(data["ingredients"]);
      } catch (error) {
        console.log("Errors", error);
      }
    }

    callApiToFetch();
  }, []);

  return (
    <SafeAreaView>
      <Header backPath="Home" goBackIcon={true} />
      <Hero />
      {vegetables?.length !== undefined ||
      spices?.length !== undefined ||
      appliances?.length !== undefined ? (
        <View style={styles.container}>
          <Text style={styles.headingType}>Vegetables</Text>
          <View style={styles.sameView}>
            {vegetables?.map((veg, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{veg.name}</Text>
                <Text>{veg.quantity}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.headingType}>Spices</Text>
          <View style={styles.sameView}>
            {spices?.map((spice, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>{spice.name}</Text>
                <Text>{spice.quantity}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.headingType}>Appliances</Text>
          <View style={styles.appliancesContainer}>
            {appliances?.map((appliance, index) => (
              <View key={index} style={styles.applianceItem}>
                <Text>{appliance.name}</Text>
                {appliance.name === "Refrigerator" && (
                  <Image
                    source={{ uri: refrigerator_Url }}
                    style={styles.commonImage}
                  />
                )}
                {appliance.name === "Microwave" && (
                  <Image
                    source={{ uri: microwave_Url }}
                    style={styles.commonImage}
                  />
                )}
                {appliance.name === "Stove" && (
                  <Image
                    source={{ uri: stove_Url }}
                    style={styles.commonImage}
                  />
                )}
              </View>
            ))}
          </View>
        </View>
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingType: { fontSize: responsiveFontSize(2), fontWeight: "600" },
  sameView: {
    marginBottom: responsiveHeight(2),
  },
  container: {
    padding: responsiveWidth(5),
  },
  appliancesContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  applianceItem: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: responsiveHeight(1),
  },
  commonImage: {
    width: responsiveWidth(25),
    height: responsiveWidth(30),
    objectFit: "contain",
    backgroundColor: "#F5F5F5",
    borderColor: "white",
    padding: responsiveWidth(10),
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default ViewADish;

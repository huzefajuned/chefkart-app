import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SimpleLineIcons, AntDesign } from "@expo/vector-icons";

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from "react-native-responsive-dimensions";
import { borderColor, whiteColor } from "../colors";
import Loader from "../component/Loader";

const refrigerator_Url =
  "https://www.lg.com/in/images/refrigerators/md07570282/GN-H602HLHM-Refrigerators-Front-View-D-01.jpg";
const microwave_Url =
  "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1691179121/Croma%20Assets/Small%20Appliances/Microwave%20or%20OTG/Images/221297_0_so68z4.png?tr=w-360";

const SingleDish = ({ dishes }) => {
  console.log("dishes inside singke", dishes);

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
                  <Text
                    style={{
                      backgroundColor: "#51C452",
                      height: responsiveHeight(2.5),
                      width: responsiveWidth(10),
                      textAlign: "center",
                      borderRadius: 5,
                      fontSize: responsiveFontSize(1.8),
                    }}
                  >
                    {rating}
                    <AntDesign
                      name="star"
                      size={responsiveFontSize(1.6)}
                      color="white"
                    />
                  </Text>
                </View>

                <View style={styles.ingrediantContainer}>
                  <View style={styles.equipmentContainer}>
                    {equipments.map((euip_) => {
                      console.log("euip_", euip_);
                      return (
                        <Text
                          key={euip_}
                          style={{
                            width: responsiveWidth(20),
                            backgroundColor: "red",
                            textAlign: "center",
                          }}
                        >
                          {euip_ === "Refrigerator" && (
                            <Image
                              source={{ uri: refrigerator_Url }}
                              height={responsiveWidth(5)}
                              width={responsiveWidth(5)}
                            />
                          )}
                          {euip_ === "Microwave" && (
                            <Image
                              source={{ uri: microwave_Url }}
                              height={responsiveWidth(5)}
                              width={responsiveWidth(5)}
                            />
                          )}
                        </Text>
                      );
                    })}
                  </View>
                  <View>
                    <Text style={styles.ingrediantText}>Ingredients</Text>
                    <TouchableOpacity>
                      <Text>
                        View List
                        <SimpleLineIcons
                          name="arrow-right"
                          size={responsiveFontSize(1.5)}
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

  ingrediantContainer: {
    backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameContainer: {
    flexDirection: "row",
    width: responsiveWidth(50),
    justifyContent: "space-between",
  },
  equipmentContainer: {
    backgroundColor: "blue",
    borderRadius: 20,
    width: responsiveWidth(30),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "flex-start",
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

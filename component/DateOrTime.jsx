import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { Fontisto, Feather } from "@expo/vector-icons";
import { blackColor, borderColor, shadowkColor, whiteColor } from "../colors";
const DateOrTime = () => {
  // Function to format the date as "yyyy-mm-dd"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("time");
  const [show, setShow] = useState(false);
  const [showDob, setShowDob] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    onValueChange(formatDate(currentDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShowDob(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.rowContainer} onPress={showDatepicker}>
          <Text>
            <Fontisto name="date" size={responsiveFontSize(4)} />
            {formatDate(date)}
          </Text>
          {/* {showDob && (
            <Text style={{ fontSize: responsiveFontSize(2) }}>
              {formatDate(date)}
            </Text>
          )} */}
        </TouchableOpacity>

        <View style={styles.rowContainer}>
          <Text>
            <Feather name="clock" size={responsiveFontSize(4)} /> curretTime
          </Text>
          {/* {showDob && (
            <Text style={{ fontSize: responsiveFontSize(2) }}>
              {formatDate(date)}
            </Text>
          )} */}
        </View>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default DateOrTime;

const styles = StyleSheet.create({
  container: {
    backgroundColor: blackColor,
    width: responsiveWidth(100),
    height: responsiveHeight(8),
  },
  innerContainer: {
    backgroundColor: whiteColor,
    width: responsiveWidth(80),
    marginLeft: responsiveWidth(10),
    height: responsiveHeight(9),
    marginTop: responsiveHeight(4),
    padding: responsiveFontSize(1),
    borderRadius: responsiveFontSize(1),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: borderColor,
    borderWidth: 1,
    shadowColor: shadowkColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: responsiveWidth(30),
  },
});

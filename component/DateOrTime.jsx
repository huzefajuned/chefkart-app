import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from "react-native-responsive-dimensions";

import { Fontisto, Feather } from "@expo/vector-icons";
import { blackColor, borderColor, shadowColor, whiteColor } from "../colors";

const DateOrTime = () => {
  // Function to format the date as "yyyy-mm-dd"
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  // Function to format the time as "hh:mm AM/PM"
  const formatTime = (date) => {
    const hours = String(date.getHours() % 12 || 12).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const ampm = date.getHours() >= 12 ? "PM" : "AM";
    return `${hours}:${minutes} ${ampm}`;
  };

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date"); // Start with date mode
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(false);
    setDate(currentDate);
    if (mode === "date") {
      // If in date mode, switch to time mode
      setMode("time");
      setShow(true); // Open the time picker
    }
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity style={styles.rowContainer} onPress={showDatepicker}>
          <Fontisto name="date" size={responsiveFontSize(4)} />
          <Text>{formatDate(date)}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rowContainer} onPress={showTimepicker}>
          <Feather name="clock" size={responsiveFontSize(4)} />
          <Text>{formatTime(date)}</Text>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={false} // Use 12-hour time format
          display="default" // Use the default platform UI
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
    shadowColor: shadowColor,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    elevation: 3,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: responsiveWidth(0.5),
    alignItems: "center",
    width: responsiveWidth(35),
    alignItems: "center",
    textAlign: "center",
  },
});

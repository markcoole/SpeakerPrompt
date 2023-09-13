import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const Duration = ({ onDurationChange }) => {
  const [selectedValue, setSelectedValue] = useState(60); // Set a default value

  return (
    <RNPickerSelect
      onValueChange={(value) => {
        setSelectedValue(value);
        onDurationChange(value);
      }}
      items={[
        { label: "30s", value: 30 },
        { label: "45s", value: 45 },
        { label: "1 min", value: 60 },
        { label: "2 min", value: 120 },
        { label: "5 min", value: 300 },
        { label: "∞", value: 0 },
      ]}
      value={selectedValue || 60}
      style={pickerSelectStyles}
    />
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
  },
});

export default Duration;

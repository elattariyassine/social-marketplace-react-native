import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import BaseText from "./BaseText";

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <BaseText style={styles.text}>{label}</BaseText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
});

export default PickerItem;

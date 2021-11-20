import React from "react";
import { Image, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import BaseText from "./BaseText";

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <View>
        <BaseText style={styles.title}>{title}</BaseText>
        <BaseText style={styles.subTitle}>{subTitle}</BaseText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    height: 70,
    width: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
});

export default ListItem;

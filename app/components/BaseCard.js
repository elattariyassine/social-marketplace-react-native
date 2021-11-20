import React from "react";
import { StyleSheet, View, Image } from "react-native";

import colors from "../config/colors";
import BaseText from "./BaseText";

const BaseCard = ({ title, subTitle, image }) => {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <BaseText style={styles.title}>{title}</BaseText>
        <BaseText style={styles.subTitle}>{subTitle}</BaseText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  image: {
    height: 200,
    width: "100%",
  },
});

export default BaseCard;

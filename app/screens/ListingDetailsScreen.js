import React from "react";
import { StyleSheet, View, Image } from "react-native";
import BaseText from "../components/BaseText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

const ListingDetailsScreen = () => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/background.jpg")}
      />
      <View style={styles.detailsContainer}>
        <BaseText style={styles.title}>Red Jacket for sale</BaseText>
        <BaseText style={styles.price}>$100</BaseText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/user.jpg")}
            title="EL ATTARI Yassine"
            subTitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  userContainer: {
    marginVertical: 50,
  },
});

export default ListingDetailsScreen;

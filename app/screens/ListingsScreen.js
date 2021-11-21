import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import BaseCard from "../components/BaseCard";
import Screen from "../components/Screen";
import colors from "../config/colors";

const Listings = [
  {
    id: 1,
    title: "Computer in good condition",
    price: 500,
    image: require("../assets/computer.jpg"),
  },
  {
    id: 2,
    title: "Originals from an Old tape",
    price: 250,
    image: require("../assets/old_tape.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={Listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <BaseCard
            title={item.title}
            subTitle={`$${item.price}`}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;

import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import BaseButton from "./app/components/BaseButton";
import BaseCard from "./app/components/BaseCard";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import Screen from "./app/components/Screen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import BasePicker from "./app/components/BasePicker";

const categories = [
  {
    label: "Cars",
    value: 1,
  },
  {
    label: "Animal",
    value: 2,
  },
  {
    label: "Tvs",
    value: 3,
  },
];

export default function App() {
  const [category, setCategory] = useState();
  const [selectItem, setSelectedLanguage] = useState();

  return (
    <Screen>
      <BasePicker
        selectedItem={category}
        onSelectItem={(category) => setCategory(category)}
        items={categories}
        icon="apps"
        placeholder="category"
      />
    </Screen>
  );
}

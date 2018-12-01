import React from "react";
import { Text, View, Image, ScrollView } from "react-native";

class CharityForm extends React.Component {
  static navigationOptions = {
    title: "Charity Form",
    headerTitleStyle: {
      color: "black"
    }
  };
  render() {
    return (
      <View>
        <Text>Food Buddy is a bundle of joy! </Text>
        <Text>
          We help reduce hunger in our city by connecting restaurants and
          supermarkets to charity instituions. The idea is for them to donate
          leftover food that they can no longer sell, instead of throwing away
          loads of perfectly consumable food.
        </Text>
        <Text>In additon, this gesture also reducees the amount of trash.</Text>
      </View>
    );
  }
}

export default CharityForm;

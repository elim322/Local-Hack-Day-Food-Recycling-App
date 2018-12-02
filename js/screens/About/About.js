import React from "react";
import { Button, Icon, Fab } from "native-base";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./styles";

class About extends React.Component {
  static navigationOptions = {
    backgroundColor: "Pink",
    title: "About",
    headerTitleStyle: {
      color: "black"
    }
  };

  constructor() {
    super();
    this.state = {
      active: false
    };
  }

  render() {
    return (
      <View style={styles.aboutContainer}>
        <ScrollView>
          <Text style={styles.aboutHeader}>There's enough food to go around!</Text>
          <Text style={styles.aboutText}>
            We help reduce hunger in our city by connecting restaurants and
            supermarkets to charity institutions. The idea is for food-related businesses to donate
            leftover food that they can no longer sell to charities that can help feed the less fortunate!
          </Text>
          <Text style={styles.aboutText}>
          With the help of technology, we can ALL make a difference!
          </Text>
        </ScrollView>
      </View>
    );
  }
}

export default About;

import React from "react";
import { Button, Icon, Fab } from "native-base";
import { ScrollView, Text, View, Image } from "react-native";
import styles from "./styles";

class About extends React.Component {
  static navigationOptions = {
    backgroundColor: "Pink",
    title: "About",
    headerTitleStyle: {
      color: "black",
      
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
        
          <View style={styles.logoCntr}>
            <Image
              source={require("../../assets/images/two.png")}
              style={styles.logo}
            />
          </View>

          <Text style={styles.aboutText}>Food Buddy is a bundle of joy! </Text>
          <Text style={styles.aboutText}>
            We help reduce hunger in our city by connecting restaurants and
            supermarkets to charity instituions. The idea is for them to donate
            leftover food that they can no longer sell, instead of throwing away
            loads of perfectly consumable food.
          </Text>
          <Text style={styles.aboutTextBottom}>
            In additon, this gesture also reducees the amount of trash.
          </Text>

          <View style={{ flex: 1 }}>
            <Fab
              active={this.state.active}
              direction="up"
              style={styles.aboutShare}
              onPress={() => this.setState({ active: !this.state.active })}
            >
              <Icon name="ios-share" />
              <Button style={{ backgroundColor: "#34A34F" }}>
                <Icon name="logo-whatsapp" />
              </Button>
              <Button style={{ backgroundColor: "#3B5998" }}>
                <Icon name="logo-facebook" />
              </Button>
              <Button disabled style={{ backgroundColor: "#DD5144" }}>
                <Icon name="mail" />
              </Button>
            </Fab>
          </View>
  
      </ScrollView>
            </View>
    );
  }
}

export default About;

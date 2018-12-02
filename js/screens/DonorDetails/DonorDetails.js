import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "../CharityDetails/styles";
import { Card } from "native-base";

class DonorDetails extends Component {
  static navigationOptions = {
    headerTintColor: "#fff"
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>Charity pickups</Text>
        <SectionList
          renderItem={({ item, index, section }) => (
            <Text style={styles.items} key={index}>
              {item}
            </Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          sections={[
            {
              title: "Save World Hunger",
              data: ["654 Howe Street Vancouver BC", "7788517980"]
            }
          ]}
        />
      </View>
    );
  }
}
export default withNavigation(DonorDetails);

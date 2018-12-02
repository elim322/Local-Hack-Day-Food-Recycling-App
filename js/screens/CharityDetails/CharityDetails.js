import React, { Component } from "react";
import { View, Text, SectionList } from "react-native";
import { withNavigation } from "react-navigation";
import styles from "./styles";

class CharityDetails extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>My Pickups</Text>
        <SectionList
          renderItem={({ item, index, section }) => (
            <Text style={styles.items} key={index}>
              {item}
            </Text>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
          )}
          sections={[{ title: "Save-on Foods", data: ["Vegetables"] }]}
        />
      </View>
    );
  }
}
export default withNavigation(CharityDetails);

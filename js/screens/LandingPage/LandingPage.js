import React from "react";
import { Text, View, Image, ScrollView, Button } from "native-base";
import styles from "./styles";

const LandingPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>I am a..</Text>
      <Button bordered style={styles.charityLabelContainer}>
        <Text style={styles.charityLabel}>Charity</Text>
      </Button>
      <Button bordered style={styles.charityLabelContainer}>
        <Text style={styles.charityLabel}>Food Donor</Text>
      </Button>
    </View>
  );
};

export default LandingPage;

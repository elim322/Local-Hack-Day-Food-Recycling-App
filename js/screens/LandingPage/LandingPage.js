import React from "react";
import { Text, View, Image, ScrollView, Button } from "native-base";
import styles from './styles'

const LandingPage = () => {
  return <View>
      <Text>I am a..</Text>

      <Button bordered>
        <Text style={styles.charityLabel}>Charity</Text>
      </Button>
    </View>;
};

export default LandingPage;

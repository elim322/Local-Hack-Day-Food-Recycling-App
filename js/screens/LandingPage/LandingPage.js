import React from "react";
import { Text, View, Button } from "native-base";
import styles from "./styles";
import { withNavigation } from "react-navigation";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

<<<<<<< HEAD
=======
  componentWillMount() {
    this.props.navigation.setParams({
      tabStyle: {
        display: "none"
      }
    });
  }
  // static navigationOptions = {
  //   tabBarVisible: false
  // };

>>>>>>> 1217b0125d028427dd29b03ed25ef16a6a641773
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>I am a..</Text>
        <Button
          bordered
          style={styles.charityLabelContainer}
          onPress={() => {
            this.props.navigation.navigate("CharityForm");
          }}
          activeOpacity={0.5}
        >
          <Text style={styles.charityLabel}>Charity</Text>
        </Button>
        <Button
          bordered
          style={styles.charityLabelContainer}
          onPress={() => {
            this.props.navigation.navigate("DonorForm");
          }}
          activeOpacity={0.5}
        >
          <Text style={styles.charityLabel}>Food Donor</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(LandingPage);

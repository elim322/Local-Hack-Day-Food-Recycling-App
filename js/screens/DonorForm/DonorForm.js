import React, { Component } from "react";
import { Dimensions } from "react-native";
import { withNavigation } from "react-navigation";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Picker,
  Icon,
  Text,
  DatePicker,
  View,
  Card,
  CardItem
} from "native-base";
import styles from "./styles";
// import data from "../../data.json";

class DonorForm extends Component {
  static navigationOptions = {
    headerTintColor: "#fff"
  };

  constructor() {
    super();
    this.state = {
      chosenDate: new Date(),
      selected2: "Select food category",
      show: false
    };
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }

  onValueChange2 = value => {
    this.setState({
      selected2: value
    });
  };

  render() {
    // const foods = Object.entries(data.Donors);
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Company Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Address</Label>
              <Input />
            </Item>
          </Form>

          <Picker
            mode="dropdown"
            iosIcon={<Icon name="ios-arrow-down-outline" />}
            style={styles.dropdown}
            placeholder="Select food category"
            placeholderStyle={{ color: "#35322F"}}
            placeholderIconColor="#00A0A0"
            selectedValue={this.state.selected2}
            onValueChange={this.onValueChange2}
  
          >
            {/* {foods.map(food => {
              <Picker.Item>{food[1].Food.Type}</Picker.Item>;
            })} */}
            <Picker.Item label="Vegetables" value="key0" />
            <Picker.Item label="Canned Goods" value="key1" />
            <Picker.Item label="Meat" value="key2" />
            <Picker.Item label="Dry Raw Food" value="key3" />
            <Picker.Item label="Cooked Food" value="key4" />
          </Picker>

          <Content>
            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Select Expiry date"
              textStyle={{ color: "#DF5B38" }}
              placeHolderTextStyle={{ color: "#35322F", marginLeft: 6 }}
            />
          </Content>
          {this.state.show ? (
            <Card style={styles.modal}>
              <Text style={styles.modaltext}>Thank you for donating!</Text>
              <Text style={styles.modaltext}>
                Your location will be available for charities to see
              </Text>
              <Text style={styles.modaltext}>
                Your location will be available for charities looking for food
                💪
              </Text>

              <Button
                success
                full
                style={{ justifyContent: "center" }}
                onPress={() => this.props.navigation.navigate("DonorDetails")}
              >
                <Text style={{ marginRight: 175 }}>Go to details</Text>
              </Button>
            </Card>
          ) : (
            <View />
          )}

          <Button
            bordered
            style={styles.button}
            onPress={() => {
              this.setState({ show: !this.state.show });
            }}
            activeOpacity={0.5}
          >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(DonorForm);

import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import {
  Container,
  View,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from "native-base";
import styles from "./styles";

class CharityForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Institution Name</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Phone</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Email</Label>
              <Input />
            </Item>
          </Form>
          <View style={styles.Button}>
            <Button
              style={styles.submit}
              bordered
              onPress={() => this.props.navigation.navigate("CharityDetails")}
              activeOpacity={0.5}
            >
              <Text>Submit</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default withNavigation(CharityForm);

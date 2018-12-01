import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Form, Field, FormSpy } from "react-final-form";
import { Text, View, Image, ScrollView, Button } from "native-base";

class DonorForm extends Component {
  constructor() {
    super();
    this.state = {
      company: "",
      email: "",
      address: "",
      expDate: "",
      foodType: ""
    };
  }

  render() {
    <View>
      <Form>
        <form>
          <fieldset>
            <Field
              name="Name"
              render={({ input }) => (
                <input
                  id="Name"
                  placeholder="Name"
                  onChange={e => this.setState({ company: e.target.value })}
                />
              )}
            />
            <Field
              name="phone"
              render={({ input }) => (
                <input
                  id="phone"
                  placeholder="Phone"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              )}
            />
            <Field
              name="email"
              render={({ input }) => (
                <input
                  id="email"
                  placeholder="Email"
                  onChange={e => this.setState({ expDate: e.target.value })}
                />
              )}
            />
          </fieldset>
          <Button type="submit">SUBMIT</Button>
        </form>
      </Form>
    </View>;
  }
}

export default withNavigation(DonorForm);

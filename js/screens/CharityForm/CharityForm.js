import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Form, Field } from "react-final-form";
import { View, Button } from "native-base";

class CharityForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      phone: "",
      email: ""
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

export default withNavigation(CharityForm);

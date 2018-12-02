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
      food: ""
    };
  }

  render() {
    return (
      <View>
        <Form>
          <form>
            <fieldset>
              <Field
                name="company"
                render={({ input }) => (
                  <input
                    type="file"
                    onChange={e => this.setState({ company: e.target.value })}
                  />
                )}
              />
            </fieldset>
          </form>
        </Form>
      </View>
    );
  }
}

export default withNavigation(DonorForm);

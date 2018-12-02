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
<<<<<<< HEAD
    <View>
      <Form>
        <form>
          <fieldset>
            <Field
              name="company"
              render={({ input }) => (
                <input
                  id="company"
                  placeholder="Company Name"
                  onChange={e => this.setState({ company: e.target.value })}
                />
              )}
            />
            <Field
              name="email"
              render={({ input }) => (
                <input
                  id="email"
                  placeholder="Email"
                  onChange={e => this.setState({ email: e.target.value })}
                />
              )}
            />
            <Field
              name="expDate"
              render={({ input }) => (
                <input
                  id="expDate"
                  placeholder="Expiration Date"
                  onChange={e => this.setState({ expDate: e.target.value })}
                />
              )}
            />
            <Field
              name="address"
              render={({ input }) => (
                <input
                  id="address"
                  placeholder="Address"
                  onChange={e => this.setState({ address: e.target.value })}
                />
              )}
            />
          </fieldset>
          <Button type="submit">SUBMIT</Button>
        </form>
      </Form>
    </View>;
=======
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
>>>>>>> ef6916f14d2c992aa55d96b69f22386bf16b7ad3
  }
}

export default withNavigation(DonorForm);

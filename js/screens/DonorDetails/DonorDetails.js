import React, { Component } from "react";
import { withNavigation } from "react-navigation";
import { Container, Header, Tab, Tabs } from 'native-base';
import CharityTab from '../../components/CharityTab';
import DonateTab from '../../components/DonateTab'
​export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Charities Coming">
            <CharityTab />
          </Tab>
          <Tab heading="Donate More">
            <DonateTab />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
export default withNavigation(DonorDetails);

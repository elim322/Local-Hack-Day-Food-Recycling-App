import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Modal,
  TouchableOpacity
} from "react-native";
import MapboxGL from "@mapbox/react-native-mapbox-gl";
import { Card, Button } from "native-base";
import { Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";

var width = Dimensions.get("window").width;

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiYmZhamFyZCIsImEiOiJjam5waHlhZGswNXdvM2twbmJ1azQwNmJ4In0.pKdi2TlW05UGa6KxRvotUA"
);

const columbusCircleCoordinates = [-123.1207, 49.2827];

class Map extends Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          ref={c => (this._map = c)}
          style={{ flex: 1 }}
          zoomLevel={15}
          centerCoordinate={columbusCircleCoordinates}
        >
          <MapboxGL.PointAnnotation
            id="pointAnnotation"
            onSelected={() =>
              this.setState({
                modalOpen: true
              })
            }
            coordinate={[-123.1207, 49.2827]}
          />
        </MapboxGL.MapView>
        {this.state.modalOpen ? (
          <Card
            style={{
              height: 200,
              width,
              margin: 10,
              padding: 10,
              backgroundColor: "#35322F",
              marginTop: 10
            }}
          >
            <TouchableOpacity
              onPress={() =>
                this.setState({
                  modalOpen: false
                })
              }
            >
              <Icon
                style={{ position: "absolute", left: 10, color: "white" }}
                name={(ios = "ios-close")}
                size={40}
              />
            </TouchableOpacity>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
                fontWeight: "bold",
                marginTop: 10,
                color: "white",
                marginLeft: 20
              }}
            >
              Save On Food
            </Text>
            <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
              654 Howe Street Vancouver BC
            </Text>
            <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
              Item(s): Vegetable
            </Text>
            <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
              Expiration Date: 4/4/2018
            </Text>
            <Button
              style={{
                height: 50,
                width: 150,
                borderRadius: 40,
                backgroundColor: "#00A0A0",
                alignSelf: "center",
                marginTop: 15
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginLeft: 30
                }}
              >
                PICK-UP
              </Text>
            </Button>
          </Card>
        ) : null}
      </View>
    );
  }
}

export default withNavigation(Map);

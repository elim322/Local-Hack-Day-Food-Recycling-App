import React, { Component } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import MapboxGL from "@mapbox/react-native-mapbox-gl";

MapboxGL.setAccessToken(
  "pk.eyJ1IjoiYmZhamFyZCIsImEiOiJjam5waHlhZGswNXdvM2twbmJ1azQwNmJ4In0.pKdi2TlW05UGa6KxRvotUA"
);

const columbusCircleCoordinates = [-73.98197650909422, 40.768793007758816];

export default class Map extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapboxGL.MapView
          ref={c => (this._map = c)}
          style={{ flex: 1 }}
          zoomLevel={15}
          centerCoordinate={columbusCircleCoordinates}
        />
      </View>
    );
  }
}

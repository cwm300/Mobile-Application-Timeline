import React, { Component } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import config from "./config";
import { Timeline } from "./components/container";

class SaloonApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, width: 100 + "%", height: 100 + "%" }}>
        <View style={styles.tempNav}></View>
        <Timeline />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tempNav: {
    width: 100 + "%",
    height: 50,
    backgroundColor: config.styleConstants.saloonBlack,
    borderBottomColor: config.styleConstants.saloonBlack,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default SaloonApp;

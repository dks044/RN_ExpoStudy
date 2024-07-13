import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import StateWithClassComponent from './StateWithClassComponent';
import StateWithFuctionalComponent from './StateWithFuctionalComponent';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <StateWithClassComponent /> */}
      <StateWithFuctionalComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

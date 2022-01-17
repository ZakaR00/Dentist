import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Color } from "../../utils/color/color";

const ListFooterComponent = ({ text }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>Пока,нет ничего!</Text>
      </View>
    </>
  );
};

export default ListFooterComponent;

const styles = StyleSheet.create({
  container: {
    height: 450,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Color.blue,
    fontSize: 18
  }
});

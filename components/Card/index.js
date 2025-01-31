import { StyleSheet, View, Text } from "react-native";
import React from "react";

const Card = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={styles.box}>
        <Text style={styles.dice}>1 to 6 </Text>
        <Text style={styles.betting}>2X </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.dice}> 7 </Text>
        <Text style={styles.betting}> 5X </Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.dice}> 8 to 12 </Text>
        <Text style={styles.betting}> 3X </Text>
      </View>
    </View>
  );
};

export default Card;
const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: "row",
    gap: 10,
  },
  box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: 200,
    // margin: 10,
    // width: 50,
  },
  dice: {
    fontFamily: "Roboto",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  betting: {
    fontFamily: "Roboto",
    fontSize: 16,
    fontWeight: "semibold",
    color: "darkblue",
  },
});

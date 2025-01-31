import React from "react";
import { View, StyleSheet } from "react-native";
import Coin from "../Coin/testingCoins.js"; // Import the Coin component

const TestingCoins1 = () => {
  return (
    <View style={styles.container}>
      {/* Betting Area */}
      <View style={styles.bettingArea}>
        <Coin size={30} />
        <Coin size={30} />
        <Coin size={30} />
      </View>

      {/* Winning Animation */}
      <View style={styles.winningArea}>
        <Coin size={50} />
        <Coin size={50} />
        <Coin size={50} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bettingArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  winningArea: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TestingCoins1;

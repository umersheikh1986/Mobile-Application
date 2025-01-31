import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const Coin = ({ size = 20 }) => {
  return (
    <View style={[styles.coinContainer, { width: size, height: size }]}>
      <LottieView
        source={require("../../assets/images/images.png")} // Replace with your Lottie file
        autoPlay
        loop
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  coinContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: "100%",
  },
});

export default Coin;

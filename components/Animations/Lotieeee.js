// import React from "react";
// import { View, StyleSheet } from "react-native";
// import LottieView from "lottie-react-native";

// const CoinAnimation = () => {
//   return (
//     <View style={styles.container}>
//       <LottieView
//         source={require("../../assets/images/coin-flip1.json")} // Replace with your Lottie file
//         autoPlay
//         loop
//         style={styles.animation}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   animation: {
//     width: 200,
//     height: 200,
//   },
// });

// export default CoinAnimation;


import React, { useRef, useEffect } from "react";
import { Animated, StyleSheet, Image, View, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const CoinAnimation = () => {
  const position = useRef(new Animated.Value(-100)).current; // Initial position (off-screen)

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(position, {
          toValue: width, // End position (off-screen on the other side)
          duration: 3000, // 3 seconds for the animation
          useNativeDriver: true,
        }),
        Animated.timing(position, {
          // toValue: -100, // Reset to start position
          duration: 0, // No delay
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [position]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={require("../../assets/images/images.png")} // Replace with your coin image path
        style={[styles.coin, { transform: [{ translateX: position }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    opacity: 1,
    // backgroundColor: "tranparent",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  coin: {
    width: 40,
    height: 40, // Adjust size as needed
  },
});

export default CoinAnimation;

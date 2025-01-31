import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from "react-native-reanimated";

const CoinFlipAnimation = () => {
  const rotateY = useSharedValue(0); // For flipping the coin

  // Start the flip animation
  useEffect(() => {
    rotateY.value = withRepeat(
      withTiming(360, { duration: 1000, easing: Easing.linear }),
      -1, // Infinite repeat
      false // Don't reverse the animation
    );
  }, []);

  // Animated style for the coin
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { perspective: 1000 }, // Required for 3D effects
      { rotateY: `${rotateY.value}deg` }, // Flip the coin
    ],
  }));

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.coin, animatedStyle]}>
        <Image
          source={require("../../assets/images/casino-coin.png")} // Replace with your coin image
          style={styles.coinImage}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  coin: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  coinImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50, // Make it circular
  },
});

export default CoinFlipAnimation;

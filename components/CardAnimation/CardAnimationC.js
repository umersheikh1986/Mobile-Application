import { StyleSheet, View, Text } from "react-native";
import React from "react";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming, Easing } from "react-native-reanimated";

const CardAnimationC = ({ totalCount }) => {
  const opacity = useSharedValue(1);

  // Start blinking animation if the totalCount matches a category
  if (totalCount >= 1 && totalCount <= 6) {
    opacity.value = withRepeat(
      withTiming(0, { duration: 500, easing: Easing.linear }),
      -1,
      true
    );
  } else if (totalCount === 7) {
    opacity.value = withRepeat(
      withTiming(0, { duration: 500, easing: Easing.linear }),
      -1,
      true
    );
  } else if (totalCount >= 8 && totalCount <= 12) {
    opacity.value = withRepeat(
      withTiming(0, { duration: 500, easing: Easing.linear }),
      -1,
      true
    );
  }

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View style={styles.boxContainer}>
      <Animated.View style={[styles.box, totalCount >= 1 && totalCount <= 6 ? animatedStyle : null]}>
        <Text style={styles.dice}>1 to 6</Text>
        <Text style={styles.betting}>2X</Text>
      </Animated.View>
      <Animated.View style={[styles.box, totalCount === 7 ? animatedStyle : null]}>
        <Text style={styles.dice}>7</Text>
        <Text style={styles.betting}>5X</Text>
      </Animated.View>
      <Animated.View style={[styles.box, totalCount >= 8 && totalCount <= 12 ? animatedStyle : null]}>
        <Text style={styles.dice}>8 to 12</Text>
        <Text style={styles.betting}>3X</Text>
      </Animated.View>
    </View>
  );
};

export default CardAnimationC;

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

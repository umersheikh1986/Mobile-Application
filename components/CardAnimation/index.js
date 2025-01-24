import { StyleSheet, View, Text } from "react-native";
import React, { useEffect } from "react";
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withTiming } from "react-native-reanimated";

const Card = ({ diceTotal }) => {
  // Shared values for blinking effect
  const opacity1 = useSharedValue(1);
  const opacity2 = useSharedValue(1);
  const opacity3 = useSharedValue(1);

  useEffect(() => {
    const blinkAnimation = (opacity) => {
      opacity.value = withRepeat(withTiming(0, { duration: 300 }), 4, true);
    };

    // Apply blinking based on dice total
    if (diceTotal >= 1 && diceTotal <= 6) {
      blinkAnimation(opacity1);
    } else if (diceTotal === 7) {
      blinkAnimation(opacity2);
    } else if (diceTotal >= 8 && diceTotal <= 12) {
      blinkAnimation(opacity3);
    }
  }, [diceTotal]);

  // Animated styles
  const animatedStyle1 = useAnimatedStyle(() => ({ opacity: opacity1.value }));
  const animatedStyle2 = useAnimatedStyle(() => ({ opacity: opacity2.value }));
  const animatedStyle3 = useAnimatedStyle(() => ({ opacity: opacity3.value }));

  return (
    <View style={styles.boxContainer}>
      <Animated.View style={[styles.box, animatedStyle1]}>
        <Text style={styles.dice}>1 to 6</Text>
        <Text style={styles.betting}>2X</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedStyle2]}>
        <Text style={styles.dice}>7</Text>
        <Text style={styles.betting}>5X</Text>
      </Animated.View>
      <Animated.View style={[styles.box, animatedStyle3]}>
        <Text style={styles.dice}>8 to 12</Text>
        <Text style={styles.betting}>3X</Text>
      </Animated.View>
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
    fontWeight: "600",
    color: "darkblue",
  },
});

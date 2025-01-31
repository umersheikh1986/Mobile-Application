import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  Easing,
} from "react-native-reanimated";

const CardAnimationCC = ({ totalCount }) => {
  const borderWidth = useSharedValue(0); // Default border width

  useEffect(() => {
    // Reset border width to default on totalCount change
    if (totalCount) {
      borderWidth.value = withRepeat(
        withTiming(8, { duration: 400, easing: Easing.ease }),
        -1,
        true
      );
    } else {
      borderWidth.value = withTiming(2, { duration: 200 }); // Reset to default
    }
  }, [totalCount]);

  // Animated border style
  const animatedBorderStyle = useAnimatedStyle(() => ({
    borderWidth: borderWidth.value,
    borderColor: "transparent", // Red border when active
  }));

  const getBoxStyle = (condition) => {
    return condition
      ? [styles.highlight, animatedBorderStyle]
      : [styles.defaultCard];
  };

  return (
    <View style={styles.cardContainer}>
      {/* Card 1: 1 to 6 */}
      <Animated.View style={[styles.card1, ...getBoxStyle(totalCount <= 6)]}>
        <Text style={styles.text}>1 to 6</Text>
        <Text style={styles.textSmall}>2X</Text>
      </Animated.View>

      {/* Card 2: 7 */}
      <Animated.View style={[styles.card2, ...getBoxStyle(totalCount === 7)]}>
        <Text style={styles.text}>7</Text>
        <Text style={styles.textSmall}>5X</Text>
      </Animated.View>

      {/* Card 3: 8 to 12 */}
      <Animated.View style={[styles.card3, ...getBoxStyle(totalCount >= 8)]}>
        <Text style={styles.text}>8 to 12</Text>
        <Text style={styles.textSmall}>3X</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    // position: "absolute",
    flexDirection: "row", // Aligning cards in a row
    // justifyContent: "center", // Center the cards horizontally
    // alignItems: "center", // Align cards vertically
    // marginBottom: -100, // Add some space from the top of the container
  },
  card1: {
    justifyContent: "center",
    alignItems: "center",
    // maginTop:"auto",
    marginTop: 14,
    width: 120,
    height: 50,
    marginRight: 7, // Add some space between the cards
    borderRadius: 25,
    transform: [{ rotate: "31deg" }],
    zIndex: 3, // Higher zIndex so it's on top of others
  },
  card2: {
    justifyContent: "center",
    alignItems: "center",
    width: 130,
    height: 50,
    borderRadius: 25,
    // marginBottom:-45,
    marginTop: 50, // Add space between cards
    zIndex: 2, // Middle zIndex
  },
  card3: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 50,
    marginTop: 14,
    marginLeft: 10, // Add space between cards
    borderRadius: 25,
    transform: [{ rotate: "-31deg" }],
    zIndex: 1, // Lowest zIndex so it's behind other cards
  },
  defaultCard: {
    backgroundColor: "lightblue",
    width: 120,
    height: 50,
    borderColor: "transparent",
  },
  highlight: {
    backgroundColor: "yellow",
  },
  text: {
    fontSize: 10,
    fontWeight: "bold",
    color: "black",
  },
  textSmall: {
    fontSize: 12,
    fontWeight: "600",
    color: "darkblue",
  },
});

export default CardAnimationCC;

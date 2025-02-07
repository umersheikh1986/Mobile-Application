import React, { useRef, useState } from "react";
import { View, Text, TouchableWithoutFeedback, Animated, StyleSheet } from "react-native";

const coinsNo = 10; // Number of coins
const repeat = (no) => {
  return new Array(no).fill(1); // Helper function to create an array of a given length
};

const CoinAnim = () => {
  const [selected, setSelected] = useState(0); // Track the selected item
  const item = useRef([]); // Store layout data for items
  const coins = useRef([]); // Store layout data for coins

  // Animated values for coin movement
  const flyX = useRef(
    repeat(coinsNo).map(() => new Animated.ValueXY({ x: 0, y: 0 }))
  ).current;

  const [coinShown, setCoinShown] = useState(false); // Track if coins are visible

  // Function to animate coins
  const animate = (coinIndex) => {
    const itemSelected = item.current[selected]; // Get the selected item's layout
    const { x, y } = coins.current[coinIndex]; // Get the clicked coin's layout

    setCoinShown(true); // Show coins

    // Animate each coin
    repeat(coinsNo).forEach((_, i) => {
      flyX[i].setValue({ x, y }); // Set initial position
      Animated.timing(flyX[i], {
        toValue: {
          x: itemSelected.x + itemSelected.width / 2, // Move to the center of the selected item
          y: itemSelected.y + itemSelected.height / 2,
        },
        useNativeDriver: true, // Use native driver for better performance
        delay: i * 100, // Delay each coin's animation
        duration: 650, // Animation duration
      }).start(() => {
        // Optional: Hide coins after animation completes
        // if (i + 1 === coinsNo) setCoinShown(false);
      });
    });
  };

  return (
    <View style={styles.container}>
      {/* Render animated coins */}
      {coinShown &&
        repeat(coinsNo).map((_, i) => (
          <Animated.View
            key={i} // Add a unique key for each coin
            style={[
              styles.coin,
              {
                transform: [
                  { translateX: flyX[i].x }, // Animate X position
                  { translateY: flyX[i].y }, // Animate Y position
                ],
              },
            ]}
          />
        ))}

      {/* Grid of selectable items */}
      <View style={styles.grid}>
        {repeat(3).map((_, i) => (
          <TouchableWithoutFeedback key={i} onPress={() => setSelected(i)}>
            <View
              onLayout={(event) => {
                item.current[i] = event.nativeEvent.layout; // Store layout data
              }}
              style={[
                styles.item,
                selected === i && styles.selectedItem, // Highlight selected item
              ]}
            >
              <Text style={styles.text}>
                {selected === i && "Selected\n"}
                Item {i + 1}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>

      {/* Buttons to trigger coin animation */}
      <View style={styles.coinButtons}>
        {repeat(5).map((_, i) => (
          <TouchableWithoutFeedback key={i} onPress={() => animate(i)}>
            <View
              onLayout={(event) => {
                coins.current[i] = event.nativeEvent.layout; // Store layout data
              }}
              style={styles.coinButton}
            >
              <Text style={styles.coinButtonText}>{i * 10}</Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </View>
    </View>
  );
};

export default CoinAnim;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  grid: {
    width: 300,
    height: 300,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    borderColor: "#ccc",
  },
  item: {
    width: "33.33%",
    height: "33.33%",
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  selectedItem: {
    backgroundColor: "#e0f7fa", // Highlight selected item
  },
  text: {
    textAlign: "center",
  },
  coinButtons: {
    flexDirection: "row",
    marginTop: 20,
  },
  coinButton: {
    width: 50,
    height: 30,
    borderWidth: 1,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  coinButtonText: {
    fontSize: 16,
  },
  coin: {
    width: 16,
    height: 16,
    backgroundColor: "#ff0",
    borderRadius: 8,
    position: "absolute",
  },
});
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const CountdownTimer = ({ initialTime = 15 }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev === 0 ? initialTime : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, [initialTime]);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.text}>New Game Starts In</Text>
    <View style={styles.container}>
      <Text style={styles.timerText}>{timeLeft}</Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 50,
    // borderRadius: 50,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#FFD700", // Golden border for casino feel
    shadowColor: "#FFD700",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
  },
  text: {
    color: "#FFD700",
    fontSize: 12,
    fontWeight: "bold",
  },
  timerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFD700", // Golden text color
    textShadowColor: "rgba(255, 215, 0, 0.8)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  mainContainer: {
    alignItems: "center",
    marginLeft:140,
    marginTop:20
  }
});

export default CountdownTimer;
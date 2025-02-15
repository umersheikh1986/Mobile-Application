import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const DiceRoll = () => {
  const [playFirst, setPlayFirst] = useState(true);
  const [playSecond, setPlaySecond] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayFirst(false);
      setPlaySecond(false);

      setTimeout(() => {
        setPlayFirst(true);
        setTimeout(() => {
          setPlaySecond(true);
        }, 500); // Second dice starts 0.5s after the first one
      }, 1000);
    }, 6000); // Restart every 6 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <LottieView
        source={require("../../assets/images/Dice.json")}
        autoPlay={playFirst}
        loop={false}
        style={styles.animation}
      />
      <LottieView
        source={require("../../assets/images/Dice.json")}
        autoPlay={playSecond}
        loop={false}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',  
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 80,
    marginLeft: 20
  },
  animation: {
    width: 15, 
    height: 15,
    marginHorizontal: -2, 
    zIndex:3
  },
});

export default DiceRoll;

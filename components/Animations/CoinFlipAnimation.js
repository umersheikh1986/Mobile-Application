import React, { useRef, useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  const animationRef = useRef(null);
  const [isRolling, setIsRolling] = useState(false);

  // Function to roll the dice
  const rollDice = () => {
    if (isRolling) return; // Prevent multiple rolls at the same time

    setIsRolling(true);

    // Play the rolling animation
    animationRef.current?.play();

    // Simulate a dice roll with a random delay
    setTimeout(() => {
      const randomValue = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
      const frame = (randomValue - 1) * 10; // Adjust this based on your animation's frame structure

      // Stop the animation at the random frame
      animationRef.current?.pause();
      animationRef.current?.goToAndStop(frame, true);

      setIsRolling(false);
    }, 2000); // Adjust the delay to match the duration of your rolling animation
  };

  return (
    <View style={styles.container}>
      <LottieView
        ref={animationRef}
        source={require('../../assets/images/Dice.json')} // Replace with your animation file
        autoPlay={true} // Disable autoplay
        loop={true} // Disable loop
        style={styles.animation}
      />
      <Button title="Roll Dice" onPress={rollDice} disabled={isRolling} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex:2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  animation: {
    width: 100,
    height: 100,
  },
});

export default App;
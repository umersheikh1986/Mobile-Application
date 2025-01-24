import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from 'react-native-reanimated';

const DiceAnimationC = ({ totalCount }) => {
  // Dice images
  const diceOne = require("../../assets/images/dice1.png");
  const diceTwo = require("../../assets/images/dice2.png");
  const diceThree = require("../../assets/images/dice3.png");
  const diceFour = require("../../assets/images/dice4.png");
  const diceFive = require("../../assets/images/dice5.png");
  const diceSix = require("../../assets/images/dice6.png");

  const diceImages = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix];

  // Dice states
  const [dice1Result, setDice1Result] = useState(1);
  const [dice2Result, setDice2Result] = useState(1);

  // Shared values for animation
  const dice1X = useSharedValue(0);
  const dice2X = useSharedValue(0);
  const rotationX = useSharedValue(0);
  const rotationY = useSharedValue(0);
  const rotationZ = useSharedValue(0);

  // Animation styles
  const animatedStyleDice1 = useAnimatedStyle(() => ({
    transform: [
      { translateX: dice1X.value },
      { rotateX: `${rotationX.value}deg` },
      { rotateY: `${rotationY.value}deg` },
      { rotateZ: `${rotationZ.value}deg` },
    ],
  }));

  const animatedStyleDice2 = useAnimatedStyle(() => ({
    transform: [
      { translateX: dice2X.value },
      { rotateX: `${rotationX.value}deg` },
      { rotateY: `${rotationY.value}deg` },
      { rotateZ: `${rotationZ.value}deg` },
    ],
  }));

  const rollDice = () => {
    // Generate random dice values
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1Result(newDice1);
    setDice2Result(newDice2);

    // Start swapping animation with faster speed
    const SWAP_DISTANCE = 150;
    const DURATION = 1000;
    const EASING = Easing.inOut(Easing.ease);

    dice1X.value = withSequence(
      withTiming(SWAP_DISTANCE, { duration: DURATION / 2, easing: EASING }),
      withTiming(0, { duration: DURATION / 2, easing: EASING })
    );

    dice2X.value = withSequence(
      withTiming(-SWAP_DISTANCE, { duration: DURATION / 2, easing: EASING }),
      withTiming(0, { duration: DURATION / 2, easing: EASING })
    );

    // Start rotation animations with faster speed
    rotationX.value = withTiming(rotationX.value + 360, {
      duration: DURATION,
      easing: EASING,
    });
    rotationY.value = withTiming(rotationY.value + 360, {
      duration: DURATION,
      easing: EASING,
    });
    rotationZ.value = withTiming(rotationZ.value + 360, {
      duration: DURATION,
      easing: EASING,
    });
  };

  useEffect(() => {
    rollDice();
    const interval = setInterval(rollDice, 2000);
    return () => clearInterval(interval);
  }, []);

  // Dynamically style count based on dice values
  const getCountStyle = () => {
    if (totalCount <= 6) {
      return { backgroundColor: '#FF6666', fontSize: 30 };
    } else if (totalCount <= 9) {
      return { backgroundColor: '#FFD700', fontSize: 40 };
    } else {
      return { backgroundColor: '#32CD32', fontSize: 50 };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Dice 1 */}
        <View style={styles.diceWrapper}>
          <Animated.View style={[styles.diceContainer, animatedStyleDice1]}>
            <Image source={diceImages[dice1Result - 1]} style={styles.dice} />
          </Animated.View>
        </View>

        {/* Dice 2 */}
        <View style={styles.diceWrapper}>
          <Animated.View style={[styles.diceContainer, animatedStyleDice2]}>
            <Image source={diceImages[dice2Result - 1]} style={styles.dice} />
          </Animated.View>
        </View>

        {/* Count View */}
        <View style={styles.countWrapper}>
          <Text style={[styles.totalCount, getCountStyle()]}>{totalCount}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  diceContainer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice: {
    width: 100,
    height: 100,
  },
  totalCount: {
    color: '#fff',
    fontWeight: 'bold',
    width: 100,
    height: 100,
    textAlign: 'center',
    lineHeight: 100,
  },
  countWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
});

export default DiceAnimationC;

import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSequence,
  Easing,
} from "react-native-reanimated";

const DiceAnimationCC = ({ dice1, dice2, totalCount }) => {
  const diceImages = [
    require("../../assets/images/dice1.png"),
    require("../../assets/images/dice2.png"),
    require("../../assets/images/dice3.png"),
    require("../../assets/images/dice4.png"),
    require("../../assets/images/dice5.png"),
    require("../../assets/images/dice6.png"),
  ];

  const dice1X = useSharedValue(0);
  const dice2X = useSharedValue(0);
  const rotationX = useSharedValue(0);
  const rotationY = useSharedValue(0);
  const rotationZ = useSharedValue(0);

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

  const animateDice = () => {
    const SWAP_DISTANCE = 75; // Reduced swap distance for compact layout
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

  React.useEffect(() => {
    animateDice();
  }, [dice1, dice2]);

  const getCountStyle = () => {
    if (totalCount <= 6) {
      return { backgroundColor: "#FF6666", fontSize: 15 };
    } else if (totalCount <= 9) {
      return { backgroundColor: "#FFD700", fontSize: 15 };
    } else {
      return { backgroundColor: "#32CD32", fontSize: 15 };
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {/* Dice 1 */}
        <View style={styles.diceWrapper}>
          <Animated.View style={[styles.diceContainer, animatedStyleDice1]}>
            <Image source={diceImages[dice1 - 1]} style={styles.dice} />
          </Animated.View>
        </View>

        {/* Dice 2 */}
        <View style={styles.diceWrapper}>
          <Animated.View style={[styles.diceContainer, animatedStyleDice2]}>
            <Image source={diceImages[dice2 - 1]} style={styles.dice} />
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
    // marginTop:270
    // margin: "auto",
    // marginTop: 2,
    // flex: "row",
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#000",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  diceWrapper: {
    alignItems: "center",
    marginHorizontal: 5,
  },
  diceContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "bottom",
    backgroundColor: "green",
  },
  dice: {
    width: 50,
    height: 50,
  },
  totalCount: {
    color: "#fff",
    fontWeight: "bold",
    width: 50,
    height: 50,
    textAlign: "center",
    lineHeight: 50,
  },
  countWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});

export default DiceAnimationCC;

import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Image, Dimensions } from 'react-native';

const SlideInLeftView = ({ children }) => {
  const slideAnim = useRef(new Animated.Value(-1000)).current; // Start off-screen to the left

  useEffect(() => {
    // Trigger the animation when the component mounts
    Animated.timing(slideAnim, {
      toValue: 0, // Move to the final position (0)
      duration: 1000, // Animation duration in milliseconds
      useNativeDriver: true, // Use native driver for better performance
    }).start();
  }, [slideAnim]);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [{ translateX: slideAnim }], // Apply the slide animation
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const CoinGrid = () => {
  const numberOfCoins = 50; // Number of coins to display
  const coinsPerRow = 10; // Number of coins per row
  const coinSize = 30; // Size of each coin
  const spacing = -5; // Spacing between coins

  return (
    <View style={styles.coinGridContainer}>
      {Array.from({ length: numberOfCoins }).map((_, index) => {
        // Calculate row and column for each coin
        const row = Math.floor(index / coinsPerRow);
        const col = index % coinsPerRow;

        return (
          <Image
            key={index}
            source={require('../../assets/images/Coin-pic.png')} // Path to your coin image
            style={[
              styles.coinImage,
              {
                width: coinSize,
                height: coinSize,
                position: 'absolute', // Use absolute positioning for precise placement
                top: row * (coinSize + spacing), // Position based on row
                left: col * (coinSize + spacing), // Position based on column
              },
            ]}
          />
        );
      })}
    </View>
  );
};

const CoinLeft = () => {
  return (
    <View style={styles.container}>
      <SlideInLeftView>
        <CoinGrid />
      </SlideInLeftView>
    </View>
  );
};

export default CoinLeft;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  coinGridContainer: {
    position: 'relative', // Relative positioning for the container
    width: Dimensions.get('window').width, // Use screen width for the grid
    height: Dimensions.get('window').height, // Use screen height for the grid
  },
  coinImage: {
    resizeMode: 'contain', // Ensure the image fits within the specified dimensions
  },
});
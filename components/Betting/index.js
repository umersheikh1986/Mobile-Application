import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

const Betting = () => {
  const image = require("../../assets/images/casino-coin.png");
  const allPrices = ["3k", "5k", "10k", "20k", "100K", "200K", "2000K"];
  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);

  const visiblePrices = allPrices.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + itemsPerPage < allPrices.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <View style={styles.container1}>
      <TouchableOpacity 
        style={[styles.navButton, { opacity: startIndex === 0 ? 0.5 : 1 }]}
        onPress={handlePrevious}
        disabled={startIndex === 0}
      >

        <Text style={styles.navButtonText}>{'<'} </Text>
      </TouchableOpacity>

      <View style={styles.chipsContainer}>
        {visiblePrices.map((price, index) => (
          <ImageBackground 
            key={index} 
            source={image} 
            style={styles.image}
            imageStyle={styles.imageStyle}
          >
            <View style={styles.text}>
              <Text style={styles.priceText}>
                {price}
              </Text>
            </View>
          </ImageBackground>
        ))}
      </View>

      <TouchableOpacity 
        style={[styles.navButton, { opacity: startIndex + itemsPerPage >= allPrices.length ? 0.5 : 1 }]}
        onPress={handleNext}
        disabled={startIndex + itemsPerPage >= allPrices.length}
      >
        <Text style={styles.navButtonText}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    // marginBottom:-140,
    marginTop: 0,
    // margin:"auto",
    // paddingHorizontal: 10,
  },
  chipsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  imageStyle: {
    borderRadius: 25,
  },
  text: {
    backgroundColor: "black",
    borderRadius: 15,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  priceText: {
    color: "#efbf04",
    fontSize: 4,
    textAlign: "center",
  },
  navButton: {
    
    backgroundColor: "black",
    borderRadius: 20,
    marginHorizontal: 10,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  navButtonText: {
    color: "#efbf04",
    fontSize: 12,
    margin :"auto",
    
    
  },
});

export default Betting;
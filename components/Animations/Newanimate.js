import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import Svg, { Path } from "react-native-svg";

const coinImage = require("../../assets/images/casino-coin.png");

const CoinDropGame = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [coins, setCoins] = useState({ 0: [], 1: [], 2: [] });

  const maxCoinsPerRow = 6;
  const maxRows = 7;
  const allPrices = ["3k", "5k", "10k", "20k", "100K", "200K", "2000K"];
  const itemsPerPage = 4;
  const [startIndex, setStartIndex] = useState(0);
  const visiblePrices = allPrices.slice(startIndex, startIndex + itemsPerPage);

  const handleBoxSelection = (index) => {
    setSelectedBox(index);
  };

  const handleAddCoin = (price) => {
    if (selectedBox !== null) {
      setCoins((prevCoins) => {
        const currentCoins = prevCoins[selectedBox];
        const maxTotalCoins = maxCoinsPerRow * maxRows;

        if (currentCoins.length >= maxTotalCoins) return prevCoins;

        return {
          ...prevCoins,
          [selectedBox]: [...currentCoins, { price }],
        };
      });
    }
  };

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

  const boxStyles = [
    { transform: [{ rotate: "40deg" }] },
    { transform: [{ rotate: "0deg" }], marginTop: 42 },
    { transform: [{ rotate: "-42deg" }] },
  ];

  return (
    <>
      <View style={styles.maincontainer}>
        <View style={styles.boxContainer}>
          {[0, 1, 2].map((index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.box,
                boxStyles[index],
                selectedBox === index ? styles.selectedBox : null,
              ]}
              onPress={() => handleBoxSelection(index)}
            >
              {/* Chevron Rounded Shape with Dynamic Border Color */}
              <Svg
                width="100%"
                height="100%"
                viewBox="0 0 128 120"
                style={styles.svg}
              >
                <Path
                  d="M0,10 Q64,40 128,10  
       L128,120  
       Q64,140 0,120 Z"
                  fill="none"
                  stroke={selectedBox === index ? "gold" : "transparent"}
                  strokeWidth="4"
                />
              </Svg>

              {/* Coin Container */}
              <View style={styles.coinContainer}>
                {coins[index].map((coin, coinIndex) => (
                  <Image
                    key={coinIndex}
                    source={coinImage}
                    style={styles.coinImage}
                    resizeMode="contain"
                  />
                ))}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Coin Selection Buttons */}
        <View style={styles.coinSelectionContainer}>
          <TouchableOpacity
            style={[styles.navButton, { opacity: startIndex === 0 ? 0.5 : 1 }]}
            onPress={handlePrevious}
            disabled={startIndex === 0}
          >
            <Text style={styles.navButtonText}>{"<"}</Text>
          </TouchableOpacity>

          <View style={styles.chipsContainer}>
            {visiblePrices.map((price, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleAddCoin(price)}
              >
                <ImageBackground
                  source={coinImage}
                  style={styles.image}
                  imageStyle={styles.imageStyle}
                >
                  <View style={styles.text}>
                    <Text style={styles.priceText}>{price}</Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            ))}
          </View>

          <TouchableOpacity
            style={[
              styles.navButton,
              {
                opacity:
                  startIndex + itemsPerPage >= allPrices.length ? 0.5 : 1,
              },
            ]}
            onPress={handleNext}
            disabled={startIndex + itemsPerPage >= allPrices.length}
          >
            <Text style={styles.navButtonText}>{">"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    // marginTop: 30,
    marginLeft: 22,
  },
  box: {
    width: 110,
    height: 130,
    marginHorizontal: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedBox: {
    borderColor: "gold",
    borderWidth: 0, // Remove default border, as SVG now handles it
  },
  svg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  coinContainer: {
    position: "absolute",
    bottom: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "90%",
  },
  coinImage: {
    width: 20,
    height: 20,
    margin: -4,
  },
  coinSelectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    // marginTop: 30,
  },
  chipsContainer: {
    flexDirection: "row",
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  maincontainer: {
    gap: 10,
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
    fontSize: 8,
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
  },
});

export default CoinDropGame;
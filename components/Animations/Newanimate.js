// import React, { useState } from "react";
// import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from "react-native";

// const CoinDropGame = () => {
//   const [selectedBox, setSelectedBox] = useState(null);
//   const [coins, setCoins] = useState({ 0: [], 1: [], 2: [] });

//   const maxCoinsPerRow = 5;
//   const maxRows = 5;

//   const handleBoxSelection = (index) => {
//     setSelectedBox(index);
//   };

//   const handleAddCoin = () => {
//     if (selectedBox !== null) {
//       setCoins((prevCoins) => {
//         const currentCoins = prevCoins[selectedBox];
//         const maxTotalCoins = maxCoinsPerRow * maxRows;

//         if (currentCoins.length >= maxTotalCoins) return prevCoins;

//         return {
//           ...prevCoins,
//           [selectedBox]: [...currentCoins, {}], // Add a new coin
//         };
//       });
//     }
//   };

//   const boxStyles = [
//     { transform: [{ rotate: "40deg" }] },
//     { transform: [{ rotate: "0deg" }], marginTop: 35 },
//     { transform: [{ rotate: "-40deg" }] },
//   ];

//    const image = require("../../assets/images/casino-coin.png");
//     const allPrices = ["3k", "5k", "10k", "20k", "100K", "200K", "2000K"];
//     const itemsPerPage = 4;
//     const [startIndex, setStartIndex] = useState(0);
  
//     const visiblePrices = allPrices.slice(startIndex, startIndex + itemsPerPage);
  
//     const handlePrevious = () => {
//       if (startIndex > 0) {
//         setStartIndex(startIndex - 1);
//       }
//     };
  
//     const handleNext = () => {
//       if (startIndex + itemsPerPage < allPrices.length) {
//         setStartIndex(startIndex + 1);
//       }
//     };

//   return (
//     <>
//       <View style={styles.container}>
//         {/* Boxes */}
//         <View style={styles.boxContainer}>
//           {[0, 1, 2].map((index) => (
//             <TouchableOpacity
//               key={index}
//               style={[
//                 styles.box,
//                 boxStyles[index],
//                 selectedBox === index ? styles.selectedBox : null,
//               ]}
//               onPress={() => handleBoxSelection(index)}
//             >
//               <View style={styles.coinContainer}>
//                 {coins[index].map((_, coinIndex) => (
//                   <Image
//                     key={coinIndex}
//                     source={require("../../assets/images/casino-coin.png")} // Replace with the actual path to your coin image
//                     style={styles.coinImage}
//                     resizeMode="contain"
//                   />
//                 ))}
//               </View>
//             </TouchableOpacity>
//           ))}
//         </View>
//       </View>

//       {/* Buttons */}
//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={handleAddCoin}>
//           <Text style={styles.buttonText}>Add Coin</Text>
//         </TouchableOpacity>
//       </View>

//        {/* Second part */}
//         <View style={styles.container1}>
//              <TouchableOpacity 
//                style={[styles.navButton, { opacity: startIndex === 0 ? 0.5 : 1 }]} 
//                onPress={handlePrevious}
//                disabled={startIndex === 0}
//              >
       
//                <Text style={styles.navButtonText}>{'<'} </Text>
//              </TouchableOpacity>
       
//              <View style={styles.chipsContainer}>
//                {visiblePrices.map((price, index) => (
//                  <ImageBackground 
//                    key={index} 
//                    source={image} 
//                    style={styles.image}
//                    onPress={handleAddCoin}
//                    imageStyle={styles.imageStyle}
//                  >
//                    <View style={styles.text}>
//                      <Text style={styles.priceText}>
//                        {price}
//                      </Text>
//                    </View>
//                  </ImageBackground>
//                ))}
//              </View>
       
//              <TouchableOpacity 
//                style={[styles.navButton, { opacity: startIndex + itemsPerPage >= allPrices.length ? 0.5 : 1 }]} 
//                onPress={handleNext}
//                disabled={startIndex + itemsPerPage >= allPrices.length}
//              >
//                <Text style={styles.navButtonText}>{'>'}</Text>
//              </TouchableOpacity>
//            </View>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f8f9fa",
//   },
//   boxContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 110,
//   },
//   box: {
//     width: 100,
//     height: 70,
//     // backgroundColor: "#ddd",
//     marginHorizontal: 20,
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//     borderWidth: 2,
//     borderColor: "#aaa",
//     overflow: "hidden",
//   },
//   selectedBox: {
//     borderColor: "black",
//     borderWidth: 3,
//   },
//   coinContainer: {
//     flexDirection: "row",
//     flexWrap: "wrap",
//     width: "90%",
//     position: "absolute",
//     bottom: 10,
//   },
//   coinImage: {
//     width: 20, // Adjust size as needed
//     height: 20,
//     margin: -4, // Spacing between coins
//   },
//   buttonContainer: {
//     flexDirection: "row",
//     marginTop: 120,
//     paddingHorizontal: 10,
//   },
//   button: {
//     backgroundColor: "#007bff",
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 5,
//     marginHorizontal: 10,
//   },
//   buttonText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   // second part
//   container1: {
//     flexDirection: "row",
//     alignItems: "center",
//     // justifyContent: "center",
//     // marginBottom:-140,
//     marginTop: 0,
//     // margin:"auto",
//     // paddingHorizontal: 10,
//   },
//   chipsContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   image: {
//     width: 50,
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     margin: 5,
//   },
//   imageStyle: {
//     borderRadius: 25,
//   },
//   text: {
//     backgroundColor: "black",
//     borderRadius: 15,
//     width: 20,
//     height: 20,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   priceText: {
//     color: "#efbf04",
//     fontSize: 4,
//     textAlign: "center",
//   },
//   navButton: {
    
//     backgroundColor: "black",
//     borderRadius: 20,
//     marginHorizontal: 10,
//     width: 40,
//     height: 40,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   navButtonText: {
//     color: "#efbf04",
//     fontSize: 12,
//     margin :"auto",
    
    
//   },
// });

// export default CoinDropGame;
import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, ImageBackground } from "react-native";

const CoinDropGame = () => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [coins, setCoins] = useState({ 0: [], 1: [], 2: [] });

  const maxCoinsPerRow = 6;
  const maxRows = 5;

  const coinImage = require("../../assets/images/casino-coin.png");
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
    { transform: [{ rotate: "0deg" }], marginTop: 35 },
    { transform: [{ rotate: "-40deg" }], marginTop: -4 },
  ];

  return (
    <>
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        {/* Boxes */}
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
      </View>

      {/* Coin Selection */}
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
            <TouchableOpacity key={index} onPress={() => handleAddCoin(price)}>
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
          style={[styles.navButton, { opacity: startIndex + itemsPerPage >= allPrices.length ? 0.5 : 1 }]}
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
    // justifyContent: "center",
    // alignItems: "center",
    // backgroundColor: "#f8f9fa",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
    marginLeft:22
  },
  box: {
    width: 128,
    height: 90,
    // backgroundColor: "#ddd",
    marginHorizontal: 6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#aaa",
    overflow: "hidden",
  },
  selectedBox: {
    borderColor: "gold",
    borderWidth: 3,
  },
  coinContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "90%",
    position: "absolute",
    bottom: 10,
  },
  coinImage: {
    width: 20,
    height: 20,
    margin: -4,
  },
  coinSelectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  chipsContainer: {
    flexDirection: "row",
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  maincontainer:{
gap:140
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

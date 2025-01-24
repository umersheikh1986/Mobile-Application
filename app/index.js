import React, { useState, useEffect } from "react";
import { View, Image, ImageBackground } from "react-native";
import CardAnimationCC from "../components/CardAnimation/CardAnimationCC";
import UserRight from "../components/User/UserRight";
import UserLeft from "../components/User/UserLeft";
import DiceAnimation from "../components/DiceAnimation/DiceAnimationCC";
import Betting from "../components/Betting";

const App = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [totalCount, setTotalCount] = useState(2);
  const backgroundImage = require("../assets/images/casino-background.jpg");
  const casino_girl = require("../assets/images/casino-girl.png");
  const casino_girl_ring = require("../assets/images/casino-girl-ring.png");
  const caino_table = require("../assets/images/casino-table.png");

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);
    setTotalCount(newDice1 + newDice2);
  };

  useEffect(() => {
    const interval = setInterval(rollDice, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.bothSection}>
        {/* Top Section - 70% of screen height */}
        <View style={styles.topSection}>
          <View style={{margin:"auto"}}>
            {/* <User /> */}
            <UserRight/>
          </View>

          <View style={{ margin: "auto" }}>
            <CardAnimationCC totalCount={totalCount} />
            <View style={{}}>
            <DiceAnimation dice1={dice1} dice2={dice2}  totalCount={10}/>
              <Betting />
            </View>
          </View>
          <View style={styles.userSection}>
            <UserLeft/>
            {/* <User /> */}
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default App;
{
  /* <Betting/> */
}

const styles = {
  backgroundImage: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    // alignItems: "center",

    // borderWidth:100,
    // borderRadius: 10,
  },
  bothSection: {
    flex: 1,
    // justifyContent: "space-between",
    gap: 10,
  },
  topSection: {
    flex: 0.8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  userSection: {
    margin: "auto",
  },
  diceCardGirlSectionView: {},
  girlView: {
    margin: "auto",
  },
  cainoGirlRing: {},
  casinoGirl: {
    marginRight: 5,
    width: 170,
    height: 140,
  },
  bottomSection: {
    flex: 0.2,
  },
};

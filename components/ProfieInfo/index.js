import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Betting from "../Betting";

const user = {
  name: "John Doe",
  coins: 1000,
};

const ProfileInfo = () => {
  const user = {
    name: "John Doe",
    coins: 1000,
  };
  const profileImage = require("../../assets/images/user-game.png");
  return (
    <View style={styles.boxContainer}>
      <View style={styles.userBox}>
        <View style={{ margin: "auto" }}>
          <Image source={profileImage} style={{ width: 40, height: 40 }} />
        </View>
        
        <View>
          <Text>{user.name}</Text>
          <Text>{user.coins}</Text>
        </View>
      </View>
      {/* <Betting /> */}
      <View style={styles.userBox}>
        <Text>Hello World</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    // flex:3,
    flexDirection: "row",
    justifyContent: "space-around",

    gap: 300,
  },
  userBox: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "center",
    backgroundColor: "lightblue",

    // alignItems: "center",
    height: 50,
    // border:"1px solid black",
  },
});

export default ProfileInfo;
{
  /* <View>
         <Betting/> 
      </View>  */
}

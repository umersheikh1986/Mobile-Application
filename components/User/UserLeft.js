import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";

const profileImage = require("../../assets/images/user-game.png");
const user = [
  {
    name: "John Doe",
    coins: 1000,
  },
  {
    name: "Jane Doe",
    coins: 2000,
  },
  {
    name: "John Doe",
    coins: 3000,
  },
];

const UserLeft = () => {
  return (
    <View style={styles.boxContainer}>

          <View style={styles.box1}>
            
            <Image source={profileImage} style={{width:40,height:40}}  />
            
            <Text>{user[0].name}</Text>
            <Text>{user[0].coins}</Text>
            
          </View>

          <View style={styles.box2}>
            
            <Image source={profileImage} style={{width:40,height:40}}  />
            
            <Text>{user[1].name}</Text>
            <Text>{user[1].coins}</Text>
            
          </View>
          <View style={styles.box3}>
            
            <Image source={profileImage} style={{width:40,height:40}}  />
            
            <Text>{user[2].name}</Text>
            <Text>{user[2].coins}</Text>
            
          </View>
    </View>
  );
};
const styles = StyleSheet.create({
  boxContainer: {
   flex:1,
    flexDirection:"column",
  
    
    gap: 10,
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: 50,
    width: 80,
    marginRight:40,
    borderRadius:25,
    // border:"1px solid black",
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: 50,
    width: 80,
    borderRadius:25,
    marginLeft:40,
    // border:"1px solid black",
  },
  box3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightblue",
    height: 50,
    width: 80,
    borderRadius:25,
    marginRight:60,
    marginBottom:20,
    // border:"1px solid black",
  },
});
export default UserLeft;

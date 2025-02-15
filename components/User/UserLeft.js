import { View, Text, StyleSheet,Image } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

const profileImage = require("../../assets/images/user-game.png");
const users = [
  {
    name: "John Doe",
    coins: 1000,
    avatar: "https://img.freepik.com/free-photo/3d-people-playing-games-gambling-casino_23-2151728700.jpg",
  },
  {
    name: "Jane Doe",
    coins: 2000,
    avatar: "https://img.freepik.com/free-photo/3d-people-playing-games-gambling-casino_23-2151728711.jpg",
  },
  {
    name: "Alex Smith",
    coins: 3000,
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYH-JOkzkGWNoGkfzo54NS8uR8kdCs2w5wb1sJS5J78jkAamcaJnkv8ySaslV_zcaP_o&usqp=CAU",
  },
];
const UserLeft = () => {
  return (
    <View style={styles.boxContainer}>
         <View style={styles.box1}>
           <Avatar
             style={{ width: 40, height: 40,    borderWidth: 2,
               borderColor: "#FFD700", borderRadius:20 }}
             rounded
             source={{ uri: users[0].avatar }}
           />
           <Text style={styles.coins}>💰2000</Text> 
         </View>
         <View style={styles.box2}>
           <Avatar
             style={{ width: 40, height: 40,  borderWidth: 2,
               borderColor: "#FFD700", borderRadius:20 }}
             rounded
             source={{ uri: users[1].avatar }}
           />
           <Text style={styles.coins}>💰3000</Text> 
         </View>
         <View style={styles.box3}>
           <Avatar
             style={{ width: 40, height: 40,  borderWidth: 2,
               borderColor: "#FFD700", borderRadius:20 }}
             rounded
             source={{ uri: users[2].avatar }}
           />
           <Text style={styles.coins}>💰5000</Text> 
         </View>
       </View>
  );
};
const styles = StyleSheet.create({
  boxContainer: {
   flex:1,
    flexDirection:"column",
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 80,
    marginLeft:-130,
    borderRadius:25,
    marginTop:-22
    // border:"1px solid black",
  },
  coins: {
    color: "#FFD700",
    fontSize: 14,
    fontWeight: "bold",
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightblue",
    height: 50,
    marginTop:5,
    transform: [{ rotate: "20deg" }],
    width: 80,
    borderRadius:25,
    marginLeft:-100,
    // border:"1px solid black",
  },
  box3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "lightblue",
    height: 50,
    transform: [{ rotate: "30deg" }],
    width: 80,
    borderRadius:25,
    marginLeft:-140,
    marginBottom:10,
    // border:"1px solid black",
  },
});
export default UserLeft;
// import { Avatar } from 'react-native-elements';

// const UserLeft = () => {
//   return(
//     <><Avatar
//     rounded
//     source={{
//       uri:
//         'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
//     }}
//   />
  
//   <Avatar rounded title="MD" />
  
//   <Avatar rounded icon={{ name: 'home' }} />
  
//   <Avatar
//     source={{
//       uri:
//         'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
//     }}
//     >
//     <Avatar.Accessory {...accessoryProps} />
//   </Avatar></>
//   )
// }

// export default user

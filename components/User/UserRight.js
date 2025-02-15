import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-elements";

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

const UserRight = () => {
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
    flex: 1,
    flexDirection: "column",
    gap: 8,
  },
  box1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 50,
    borderRadius: 25,
    marginLeft: 55,
    marginTop: -18,
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
    width: 80,
    marginLeft: 20,
    height: 50,
    marginTop:6,
    borderRadius: 25,
    transform: [{ rotate: "-10deg" }]
  },
  box3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    marginLeft: 70,
    marginBottom: 13,
    transform: [{ rotate: "-25deg" }],
    height: 50,
    borderRadius: 25,
    borderBottom: 50,
  },
});

export default UserRight;
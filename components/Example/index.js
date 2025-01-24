import React, { useState, useEffect } from 'react';
import { View, Button } from 'react-native';
import DiceAnimation from './DiceAnimation'; // Adjust path if necessary
import Card from './Card'

const DiceGame = () => {
  const [dice1, setDice1] = useState(1);
  const [dice2, setDice2] = useState(1);
  const [totalCount, setTotalCount] = useState(2);

  const rollDice = () => {
    const newDice1 = Math.floor(Math.random() * 6) + 1;
    const newDice2 = Math.floor(Math.random() * 6) + 1;
    setDice1(newDice1);
    setDice2(newDice2);
    setTotalCount(newDice1 + newDice2);
  };

  useEffect(() => {
    const interval = setInterval(rollDice, 2000); // Roll dice every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <DiceAnimation dice1={dice1} dice2={dice2} totalCount={totalCount} />
    <Card totalCount={totalCount} />
      <Button title="Roll Dice" onPress={rollDice} />
    </View>
  );
};

export default DiceGame;

import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Background from "./Background";
import CustomButton from "./CustomButton";
import rawData from "../data.json";

function getRandomValue() {
  const values = [30, 45, 60, 120];
  const randomIndex = Math.floor(Math.random() * values.length);
  return values[randomIndex];
}

function potLuck(navigation) {
  const topicsArray = rawData.reduce((acc, current) => {
    return acc.concat(current.topics);
  }, []);

  const randomIndex = Math.floor(Math.random() * topicsArray.length);

  const randomTopic = topicsArray[randomIndex];

  navigation.navigate("Action", {
    selectedSuggestion: randomTopic,
    selectedTimerCount: getRandomValue(),
  });
}

export default function Splash({ navigation }) {
  return (
    <Background>
      <View style={styles.container}>
        <View style={styles.containerButtons}>
          <CustomButton
            title="Let's Speak"
            onPress={() => navigation.navigate("CategorySelection")}
            icon="megaphone-outline"
          />
          <CustomButton
            title="Pot Luck!"
            onPress={() => potLuck(navigation)}
            icon="help-circle-outline"
          />
        </View>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerButtons: {
    gap: 20,
  },
});

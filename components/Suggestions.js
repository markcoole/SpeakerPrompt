import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton.js";
import * as Sharing from "expo-sharing";
import rawData from "../data.json";
import Swiper from "react-native-deck-swiper";
import shuffleArray from "../utils/shuffleArray";
import Duration from "./Duration.js";

export default function Suggestions({ route, navigation }) {
  const { selectedCategory } = route.params;
  const [suggestions, setSuggestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedDuration, setSelectedDuration] = useState(null);

  useEffect(() => {
    if (selectedCategory) {
      const categoryData = rawData.find(
        (item) => item.category === selectedCategory
      );
      if (categoryData) {
        const topicsArray = [...categoryData.topics]; // Here we're creating a new array with the topic strings
        shuffleArray(topicsArray);
        setSuggestions(topicsArray);
      }
    }
  }, [selectedCategory]);

  function shareCurrentSuggestion() {
    const currentSuggestion = suggestions[currentIndex].text;
    Sharing.shareAsync(`data:text/plain`, {
      message: currentSuggestion,
      mimeType: "text/plain",
      dialogTitle: "Share this suggestion",
      UTI: "public.plain-text",
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.swiperContainer}>
        <View>
        <Swiper
          cards={suggestions}
          renderCard={(card) => (
            <View style={styles.card}>
              <Text style={styles.text}>{card}</Text>
            </View>
          )}
          onSwiped={() => setCurrentIndex((prevIndex) => prevIndex + 1)}
          cardIndex={currentIndex}
          backgroundColor="transparent"
          stackSize={3}
          infinite={true}
        />
        </View>
      </View>
      <View style={styles.actionContainer}>
        <CustomButton
          title="Lets speak!"
          onPress={() =>
            navigation.navigate("Action", {
              selectedSuggestion: suggestions[currentIndex],
              selectedTimerCount: selectedDuration,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingBottom: 50,
    justifyContent: "space-between",
  },
  swiperContainer: {
    flex: 6,
  },
  actionContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
    gap: 10
  },
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    padding: 20,
    marginBottom: 200,
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    flex: 4,
    textAlign: "center",
  },
});

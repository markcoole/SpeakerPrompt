import React from "react";
import { StyleSheet, View, Text } from "react-native";
import CustomButton from "./CustomButton.js";
import rawData from "../data.json";
import Background from "./Background.js";


export default function CategorySelection({ navigation }) {
  // Get all categories from rawData
  const allCategories = rawData.map((item) => ({ 
    category: item.category, 
    icon: item.icon 
  }));

  // Get a distinct list of categories
  const distinctCategories = Array.from(new Set(allCategories.map(JSON.stringify))).map(JSON.parse);

  return (
    <Background style={styles.container}>
      <Text style={styles.categoryText}>Categories</Text>
      <View style={styles.categoryContainer}>
        {distinctCategories.map((category, index) => (
          <View style={styles.categoryButton} key={index}>
            <CustomButton
              icon={category.icon}
              title={category.category}
              onPress={() =>
                navigation.navigate("Suggestions", { selectedCategory: category.category })
              }
            />
          </View>
        ))}
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    flex: 1,
    gap: 20,
  },
  categoryContainer: {
    borderRadius: 10,
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  categoryText: {
    color: "white",
    fontSize: 44,
    fontWeight: "bold",
    marginBottom: 60,
    marginTop: 80,
    textAlign: "center",
  },
  categoryButton: {
    width: '48%', // Adjust width to make space for 2 buttons in a row
    margin: '1%', // Create gaps between the buttons
  },
});

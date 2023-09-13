import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import Timer from "./Timer";

export default function Action({ route, navigation }) {
  const { selectedSuggestion } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.selectedContainer}>
        <View>
          <Text style={styles.text}>{selectedSuggestion}</Text>
        </View>
        <View style={styles.timerContainer}>
          <Timer navigation={navigation} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: "space-between",
  },
  selectedContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    padding: 20,
    flex: 1,
    justifyContent: "space-between",
  },
  timerContainer: {
    flex: 1,
    paddingTop: 80,
  },
  text: {
    color: "black",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
});

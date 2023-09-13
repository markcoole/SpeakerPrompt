import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { CommonActions } from '@react-navigation/native';
import CustomButton from "./CustomButton";

export default function Congratulations({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.selectedContainer}>
        <Text style={styles.text}>Well done!</Text>
        <Text style={styles.text}>Superb!</Text>
        <Text style={styles.text}>You nailed it!</Text>
        <Text style={styles.text}>Outstanding!</Text>
        <Text style={styles.text}>Impressive!</Text>
        <Text style={styles.text}>Excellent !</Text>
        <Text style={styles.text}>Keep it up!</Text>
        <Text style={styles.text}>Great job!</Text>
        <CustomButton
          title="Speak again"
          onPress={() => navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{ name: 'Splash' }],
            })
          )}
        />
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
  text: {
    color: "black",
    fontSize: 44,
    fontWeight: "bold",
    textAlign: "center",
  },
});

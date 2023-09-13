import React from 'react';
import { SettingsProvider } from './context/SettingsContext';
import MyApp from './components/MyApp';

export default function App () {
  return (
    <SettingsProvider>
      <MyApp />
    </SettingsProvider>
  );
};




// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
// import Suggestions from "./components/Suggestions";
// import Congratulations from "./components/Congratulations";
// import Splash from "./components/Splash";
// import CategorySelection from "./components/Category";
// import Action from "./components/Action.js";

// export default function App() {
//   const [selectedSuggestion, setSelectedSuggestion] = useState(null);
//   const [selectedTimerCount, setSelectedTimerCount] = useState(null);
//   const [timerFinished, setTimerFinished] = useState(false);
//   const [showSplashScreen, setShowSplashScreen] = useState(true);
//   const [selectedCategory, setSelectedCategory] = useState(null);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowSplashScreen(false);
//     }, 1000);

//     return () => clearTimeout(timer);
//   }, []);

//   function handleSuggestionSelected(suggestion, timerCount) {
//     setSelectedSuggestion(suggestion);
//     setSelectedTimerCount(timerCount);
//   }

//   function handleTimerEnd() {
//     console.log("Timer ended")
//     setTimerFinished(true);
//   }

//   function handleCategorySelection(category) {
//     console.log(category)
//     setSelectedCategory(category);
//   }

//   function handleMenuPress() {
//     console.log("Menu pressed");
//     // Here you can navigate to a different screen or open a modal, etc.
//   }

//   return (
//     <View style={styles.container}>
//       {!showSplashScreen && (
//         <TouchableOpacity style={styles.menuButton} onPress={handleMenuPress}>
//           <Text style={styles.menuText}>Menu</Text>
//         </TouchableOpacity>
//       )}

//       {showSplashScreen ? (
//         <Splash />
//       ) : !selectedCategory ? (
//         <CategorySelection handleCategorySelection={handleCategorySelection} />
//       ) : !selectedSuggestion ? (
//         <Suggestions onSuggestionSelected={handleSuggestionSelected} selectedCategory={selectedCategory} />
//       ) : selectedSuggestion && !timerFinished ? (
//         <Action
//           selectedTimerCount={selectedTimerCount}
//           selectedSuggestion={selectedSuggestion}
//           handleTimerEnd={handleTimerEnd}
//         />
//       ) : timerFinished ? (
//         <Congratulations
//           setTimerFinished={setTimerFinished}
//           setSelectedSuggestion={setSelectedSuggestion}
//           setSelectedCategory={setSelectedCategory}
//         />
//       ) : null}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "black",
//     flex: 1,
//     paddingHorizontal: 20,
//     paddingTop: 50,
//     paddingBottom: 50,
//     justifyContent: "space-between",
//   },
//   selectedContainer: {
//     backgroundColor: "white",
//     borderRadius: 10,
//     shadowColor: "rgba(0, 0, 0, 0.3)",
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.5,
//     padding: 20,
//     flex: 1,
//     justifyContent: "space-between",
//   },
//   text: {
//     color: "black",
//     fontSize: 44,
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   menuButton: {
//     position: "absolute",
//     top: 70,
//     right: 40,
//     padding: 10,
//     backgroundColor: "#000",
//     borderRadius: 5,
//     zIndex: 10,
//   },
//   menuText: {
//     color: "black",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

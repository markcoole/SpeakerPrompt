import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // or any other icon library you prefer
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Suggestions from "./Suggestions";
import Congratulations from "./Congratulations";
import Splash from "./Splash";
import CategorySelection from "./Category";
import Action from "./Action.js";
import Settings from "./Settings.js";
import {HeaderTitle, HeaderLeft, HeaderRight } from "./Header.js";

const Stack = createStackNavigator();

export default function MyApp() {

  const options = ({ navigation }) => ({ headerTitle: () => <HeaderTitle />, 
    headerStyle: {
        backgroundColor: '#000'
      },
      headerLeft: () => <HeaderLeft />,
      headerRight: () => <HeaderRight navigation={navigation} />
    })

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={Splash} options={options} />
        <Stack.Screen name="CategorySelection" component={CategorySelection} options={options} />
        <Stack.Screen name="Suggestions" component={Suggestions} options={options} />
        <Stack.Screen name="Action" component={Action} options={options} />
        <Stack.Screen name="Congratulations" component={Congratulations} options={options} />
        <Stack.Screen name="Settings" component={Settings} options={options} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

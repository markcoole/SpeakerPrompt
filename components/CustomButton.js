import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function CustomButton(props) {
  const { onPress, title = 'Save', icon = 'null' } = props;
  return (
    <LinearGradient colors={["transparent"]}>
      <Pressable style={icon !== 'null' ? styles.iconButton : styles.button} onPress={onPress}>
        {icon !== 'null' && <Ionicons name={icon} size={32} color="white" />}
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 22,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    backgroundColor: 'black',
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
    paddingHorizontal: 32,
    borderRadius: 12,
    elevation: 3,
    borderColor: 'white',
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    borderTopWidth: 2,

    gap: 12,
  },
  text: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
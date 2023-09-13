import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { CommonActions } from '@react-navigation/native';
import CustomButton from "./CustomButton.js";
import { SettingsContext } from '../context/SettingsContext';

function Timer({ navigation }) {
  const { settings } = useContext(SettingsContext);
  const [minutes, setMinutes] = useState(Math.floor(settings.duration / 60));
  const [seconds, setSeconds] = useState(settings.duration % 60);
  const [initialCountdown, setInitialCountdown] = useState(3);
  const [isCountingUp, setIsCountingUp] = useState(settings.duration === 0);

  useEffect(() => {
    if (initialCountdown === 0) return;

    const countdownInterval = setInterval(() => {
      setInitialCountdown((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [initialCountdown]);


  useEffect(() => {
    if (initialCountdown > 0) return;

    const timerInterval = setInterval(() => {
      if (isCountingUp) {
        setSeconds((prevSeconds) => {
          if (prevSeconds < 59) {
            return prevSeconds + 1;
          } else {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          }
        });
      } else {
        setSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            setMinutes((prevMinutes) => {
              if (prevMinutes > 0) {
                return prevMinutes - 1;
              } else {
                return 0;
              }
            });
            return 59;
          }
        });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [minutes, seconds, initialCountdown, isCountingUp]);

  useEffect(() => {
    if (minutes === 0 && seconds === 0 && !isCountingUp && initialCountdown === 0) {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: 'Congratulations' }],
        })
      );
    }
  }, [minutes, seconds, isCountingUp, initialCountdown]);

  const formatTime = (num) => {
    return num < 10 ? '0' + num : '' + num;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{initialCountdown > 0 ? `${initialCountdown}` : `${formatTime(minutes)}:${formatTime(seconds)}`}</Text>
      <CustomButton title="End" onPress={() => navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: 'Splash' }],
                })
              )} />
    </View>
  );
}

export default Timer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    textAlign: "center",
  },
  text: {
    color: "black",
    fontSize: 88,
    fontWeight: "bold",
    textAlign: "center",
  },
});

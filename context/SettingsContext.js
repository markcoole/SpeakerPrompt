import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SettingsContext = createContext();
export const SettingsProvider = ({ children }) => {
  const defaultSettings = {
    theme: 'light', // or any other default settings you want
    duration: 60, // example default duration
  };

  const [settings, setSettings] = useState(defaultSettings);

  const loadSettings = async () => {
    try {
      const storedSettings = await AsyncStorage.getItem('settings');
      if (storedSettings) {
        setSettings({ ...defaultSettings, ...JSON.parse(storedSettings) });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveSettings = async (newSettings) => {
    try {
      await AsyncStorage.setItem('settings', JSON.stringify(newSettings));
      setSettings(newSettings);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, saveSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

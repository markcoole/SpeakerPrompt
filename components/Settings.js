import React, { useContext } from 'react';
import { View, Switch } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';
import Duration from './Duration';
import Background from './Background';

export default function Settings() {
  const { settings, saveSettings } = useContext(SettingsContext);

  return (
    <Background>
      <Switch
        value={settings.darkMode || false}
        onValueChange={(value) => saveSettings({ ...settings, darkMode: value })}
      />
      <Duration onDurationChange={(value) => saveSettings({ ...settings, duration: value })} />
    </Background>
  );
};

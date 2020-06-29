
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Navigator from "./src/components/homeStack";

export default function App() {
  return (
        <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

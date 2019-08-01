import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue="aaaaaaa"
        style={{ width: 200, height: 44, padding: 8 }}
      />
      <Text>JavaScript・HTMLでいうSpanみたいな書き方ができます</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

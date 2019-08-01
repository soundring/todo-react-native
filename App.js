import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// 次にやること
// 文字入力の値を取得する
// ボタンでその入力をアラート表示する

export default function App() {
  const [text, setText] = useState('文字を入力してください');
  const [todos, setTodos] = useState([]);
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={text}
        onChangeText={inputText => {
          setText(inputText);
        }}
        style={{
          width: 200,
          height: 44,
          padding: 8,
          backgroundColor: 'black',
          color: 'white'
        }}
      />
      <Button
        onPress={() => {
          setTodos(todos.concat(text));
          setText('');
        }}
        title="タスクを追加"
        color="#841584"
      />
      {todos.map((todo, index) => (
        <Text>
          {index + 1}:{todo}
        </Text>
      ))}
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

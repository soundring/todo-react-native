import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
// 次にやること
// 文字入力の値を取得する
// ボタンでその入力をアラート表示する

export default function App() {
   const [text, setText] = useState("なし")
   const [todo,setTodo] = useState("無し")
  return (
    <View style={styles.container}>
      <TextInput
        defaultValue={text}
        onChangeText={(e) =>{
            alert("入力された値",e,"Todoになるテキスト",text)
        }}
        style={{ width: 200, height: 44, padding: 8 ,backgroundColor: "red"}}
      />
      <Button
      onPress={()=> {
        setTodo("変更されたTODO")
      }}
      title="タスクを追加"
      color="#841584"
       />

      <Text>{todo}</Text>
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

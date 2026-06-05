import { Image } from 'expo-image';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

// I updated index.tsx to add counter and dynamic messages. June 05, 2026

export default function App() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);

  return (
    <View style={s.screen}>
      <Image
        source={{ uri: 'https://i.imgur.com/5kB7zLM.jpeg' }}
        style={s.photo}
      />

      <TextInput
        placeholder="Type your name..."
        onChangeText={setName}
        style={s.input}
      />

      {name ? <Text style={s.greeting}>Hello, {name}!</Text> : null}

      <Text style={s.counter}>Count: {count}</Text>

      {count > 10 && <Text style={s.message}>Wow, that's a lot!</Text>}
      {count < 0 && <Text style={s.message}>Going negative!</Text>}
      {count === 0 && <Text style={s.message}>Counter is at zero!</Text>}

      <View style={s.buttons}>
        <TouchableOpacity style={s.btn} onPress={() => setCount(count + 1)}>
          <Text style={s.btnText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.btn} onPress={() => setCount(count - 1)}>
          <Text style={s.btnText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={s.btnReset} onPress={() => setCount(0)}>
          <Text style={s.btnText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  screen:   { flex:1, alignItems:'center', justifyContent:'center' },
  photo:    { width:120, height:120, borderRadius:60 },
  input:    { height:40, borderWidth:1, borderColor:'#ccc', borderRadius:8, marginTop:20, padding:10, width:200 },
  greeting: { fontSize:18, fontWeight:'bold', marginTop:12 },
  counter:  { fontSize:32, fontWeight:'bold', marginTop:20 },
  message:  { fontSize:14, color:'#888', marginTop:8 },
  buttons:  { flexDirection:'row', gap:10, marginTop:16 },
  btn:      { backgroundColor:'#007AFF', padding:12, borderRadius:8, width:60, alignItems:'center' },
  btnReset: { backgroundColor:'#FF3B30', padding:12, borderRadius:8, width:80, alignItems:'center' },
  btnText:  { color:'#fff', fontWeight:'bold', fontSize:16 }
});
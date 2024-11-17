import React from 'react';
import {StyleSheet, View, TextInput, Button} from 'react-native';


const TextInputExample = () => {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');

  return (
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Job Name"
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={text}
          placeholder="Note"
        />
        <Button 
            title='Enter'
            color='#841584'
            onPress={()=>console.log("Enter pressed")}
          />
      </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default TextInputExample;
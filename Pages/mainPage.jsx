import {useState, useEffect} from "react";
import dayjs from 'dayjs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import TextInputExample from '../Components/textInputExample';
import { useNavigation } from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context"

const MainPage = ()=>{
    const navigation = useNavigation();
    const [date, setDate] = useState(dayjs());

  useEffect(()=>{
    const interval =setInterval(()=> {
      setDate(dayjs());
    },1000 * 1)
    return () =>{
     clearInterval(interval) 
    }
  }, [])
  
  const [newJobOpen,setNewJobOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <View>
            <Text>Welcome to mustr!</Text>
            <Text>{date.format("dddd, DD MMMM")}</Text>
            <Text>{date.format("hh:mm")}</Text>
        </View>
        <View style={styles.buttonView}>
            <View style={styles.button}>
                <Button 
                title='Select Job'
                color='#841584'
                onPress={()=> navigation.navigate('Jobs')}
                />
            </View>
            <View style={styles.button}>
                <Button 
                title='New Job'
                color='#841584'
                onPress={()=>setNewJobOpen(!newJobOpen)}
                />
            </View>
        </View>
        <View>
            {newJobOpen? <TextInputExample/> : ""}
        </View>
        
        <View style={styles.button}>
            <Button 
                title='Clock in'
                color='#841584'
                onPress={()=>console.log("Clock in  pressed")}
            />
        </View>
        <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'centered',
  },
  buttonView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  button: {
    margin: 12,
  }
});

export default MainPage

import {  SafeAreaProvider } from "react-native-safe-area-context";
import './gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import MainPage from "./Pages/mainPage";
import Jobs from "./Pages/jobs";


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={MainPage} />
      <Stack.Screen name="Jobs" component={Jobs} />
    </Stack.Navigator>
  );
}
export default function App() {
  return(
    <SafeAreaProvider>
      
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
        
    </SafeAreaProvider>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'centered',
  },
})



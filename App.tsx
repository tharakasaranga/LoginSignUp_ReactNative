import React, { useState } from "react";
import { Alert, Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import LoginScreen from "./src/components/Screens/LoginScreen";
import Signup from "./src/components/Screens/Signup";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigation from "./src/Navigations/AppNavigation";
import 'react-native-gesture-handler';


function App(): JSX.Element {

  return (

    <View style={sty.container}>

      <AppNavigation />

      {/* <LoginScreen/> */}
      {/*<Signup/>*/}
    </View>

  );
}

const sty = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
})

export default App;
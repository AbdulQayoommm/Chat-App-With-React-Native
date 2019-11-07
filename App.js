import React from 'react';
import LoginWithFacebook from './src/Screens/FacebookLogin';
import Stacknavigaion from './src/Config/Navigation/StackNavigation'
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from 'react-redux';
import store from './src/Config/Store'

export default function App() {
  return (
      <Provider  store = {store}>
      <Stacknavigaion/>
      </Provider>
  );
}
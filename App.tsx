import { StatusBar } from 'expo-status-bar';
import React, { Fragment, useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList, TouchableOpacity, GestureResponderEvent } from 'react-native';
import MyAlert from './components/MyAlert';
import MyInput from './components/MyInput';
import { AppContainer } from './src/homeStack';

export default function App ()
{


  return (
    <Fragment>
      <AppContainer />
    </Fragment>
  );
}

const styles = StyleSheet.create( {
  container: {
    maxWidth: 968,
    overflow: 'hidden',
    margin: 'auto',
  },
  content: {
  },
  list: {
    width: 300,
    height: 500,
    textAlign: 'center',
    backgroundColor: 'pink',

  }
} );

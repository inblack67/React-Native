import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';

export default function App ()
{
  const [ name, setName ] = useState<String>( 'John' );
  const [ age, setAge ] = useState<Number>( 21 );
  const [ peeps, setPeeps ] = useState( [
    {
      name: 'john',
      id: 1,
    },
    {
      name: 'doe',
      id: 2,
    },
    {
      name: 'ok',
      id: 3,
    },
    {
      name: 'lorem',
      id: 4,
    },
    {
      name: 'ipsum',
      id: 5,
    },
    {
      name: 'lol',
      id: 6,
    },
    {
      name: 'jim',
      id: 7,
    },
  ] );

  const handlePress = () =>
  {
    setName( 'Doe' );
  };

  const handleAge = ( val: string ) =>
  {
    setAge( +val );
  };

  return (
    <View style={ styles.container }>
      <View style={ styles.content }>
        <Text>
          <Button onPress={ handlePress } title='Change' />
          <Text>
            My name is { name }
          </Text>
          <Text>
            My age is { age }
          </Text>
        </Text>
      </View>
      <View>
        <TextInput onChangeText={ handleAge } />
      </View>
      <FlatList
        keyExtractor={ item => item.id.toString() }
        data={ peeps }
        renderItem={ ( { item } ) => (
          <Text style={ styles.list }>
            {item.name }
          </Text>
        ) }
      />
      {/* <ScrollView>
        { peeps.map( ( peep, index ) => <Text style={ styles.list } key={ index }>
          { peep.name }
        </Text> ) }
      </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create( {
  container: {
    maxWidth: '968px',
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

import React from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

const Home = ( props ) =>
{
    const handlePress = () =>
    {
        props.navigation.navigate( 'register' );
    };

    return (
        <View>
            <Text>
                home
            </Text>
            <Button title='Register' onPress={ handlePress } />
        </View>
    );
};

export default Home;

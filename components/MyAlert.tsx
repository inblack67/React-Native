import React, { useState } from 'react';
import { Alert, Button, View } from 'react-native';

const MyAlert = () =>
{

    const [ isAlertOpen, setIsAlertOpen ] = useState( false );

    const handleFireAlert = () =>
    {
        setIsAlertOpen( true );
    };

    return (
        <View>
            <Button title='Fire Alert' onPress={ handleFireAlert } />
            {isAlertOpen ? Alert.alert( 'oh shit', 'oh no', [
                { text: 'lorem5', onPress: () => setIsAlertOpen( false ) }
            ] ) : null }
        </View>
    );
};

export default MyAlert;
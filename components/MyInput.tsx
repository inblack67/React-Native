import React, { useEffect, useState } from 'react';
import { Button, TextInput, View, StyleSheet, Text, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

interface IForm
{
    name: string,
    email: string,
    password: string;
}

const MyInput = () =>
{

    const [ formData, setFormData ] = useState<IForm>( {
        name: '',
        email: '',
        password: ''
    } );
    const [ isFormInvalid, setIsFormInvalid ] = useState( true );

    const { name, email, password } = formData;
    useEffect( () =>
    {
        if ( name.length > 0 && email.length > 0 && password.length > 0 )
        {
            setIsFormInvalid( false );
        }
        else
        {
            setIsFormInvalid( true );
        }
    }, [ formData ] );

    const handleChange = ( fieldName: string ) => ( val: string ) =>
    {
        setFormData( {
            ...formData,
            [ fieldName ]: val
        } );
    };

    const handleSubmit = () =>
    {
        console.log( 'formData = ', formData );
    };

    const handleKeyboardDismiss = () =>
    {
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={ handleKeyboardDismiss }>
            <ScrollView>
                <View style={ styles.form }>
                    <Text>Name</Text>
                    <TextInput style={ styles.input } onChangeText={ handleChange( 'name' ) } />
                    <Text>Email</Text>
                    <TextInput style={ styles.input } onChangeText={ handleChange( 'email' ) } />
                    <Text>Password</Text>
                    <TextInput style={ styles.input } onChangeText={ handleChange( 'password' ) } />
                    <Button title='Submit' color='red' onPress={ handleSubmit } disabled={ isFormInvalid } />
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create( {
    form: {
        backgroundColor: '#000',
    },
    input: {
        borderColor: 'red',
        color: '#000',
        fontSize: 15,
        margin: 20,
        backgroundColor: '#fff',
        padding: 10
    }
} );

export default MyInput;

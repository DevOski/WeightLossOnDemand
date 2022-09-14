import React, {useState} from 'react';

import {View, StyleSheet, Text, TextInput} from 'react-native';


 export const CustomTextFiel = ({value,placeholder,setValue,secureTextEntry}) => {
    return (
    //   <View style={styles.container}>
    <>
        <TextInput
        mode='contain'
        //   style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={setValue}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        />
        </>
     
    );
  };
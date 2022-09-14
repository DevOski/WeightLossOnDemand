import React, {useState} from 'react';
import { TextInput } from 'react-native-paper';
import {View, StyleSheet, Text, } from 'react-native';
import { colors } from '../../services';


 export const CustomTextFiel = ({value,label,setValue,secureTextEntry}) => {
    return (
    //   <View style={styles.container}>
    <>
        <TextInput
        mode='contain'
        //   style={styles.input}
        value={value}
        label={label}
        onChangeText={setValue}
        autoCapitalize={'none'}
        secureTextEntry={secureTextEntry}
        activeUnderlineColor={'red'}
        style={{backgroundColor:colors.white,fontSize:20}}
        />
        </>
     
    );
  };
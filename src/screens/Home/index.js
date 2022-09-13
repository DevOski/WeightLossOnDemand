import React, {useRef, useState} from 'react';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function index() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Text>abcs</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

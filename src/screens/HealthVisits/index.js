import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
export default function HealthVisits() {
  return (
    <SafeAreaView>
      <View>
        <Header title={"Visits"} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.contentView}>
            <Text style={styles.text}>You haven't had any visits yet.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

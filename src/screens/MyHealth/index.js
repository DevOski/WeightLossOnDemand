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
import images from '../../services/utilities/images';
import {styles} from './style';

export default function MyHealth({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={[styles.row, styles.padding]}>
          <Text style={styles.heading}> My Health</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image source={images.setting} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('Allergies')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Visits</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('Allergies')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Documents</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('Allergies')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Lab Tests</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('Allergies')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Messages</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('Allergies')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Questionnaires</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('Allergies')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>My Providers</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity 
          // onPress={() => navigation.navigate('Allergies')}
          >
            <View style={[styles.row, styles.card]}>
              <Text style={styles.cardText}>Pharmacies</Text>
              <View>
                <Text style={styles.symbol}> ›</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

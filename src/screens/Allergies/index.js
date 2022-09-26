import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import {colors} from '../../services';
import Header from '../../components/Header';
export default function Allergies() {
  return (
    <SafeAreaView>
      <Header title={'Alleriges'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.allergies} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Allergies</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            The main function of your immune system is to protect your body
            against foreign invaders that cause infection such as bacteria,
            viruses, fungi and parasites. However, sometimes, the immune system
            produces “protection” against substances that are normally harmless.
            When this happens, you have developed an allergy.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            The most common substances in the environment that people become
            allergic to -- called allergens -- are plant pollens, animal dander,
            dust mites and molds. These allergens are inhaled and can result in
            sneezing, itchy watery eyes, stuffiness and even an asthma attack.
            The immune system can also react directly to chemicals in the
            environment such as strong fragrances and pollution, and similar
            symptoms can occur.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Food allergy affects up to 4% of adults and up to 8% of children. If
            you develop an allergy to any foods, ingestion can cause hives,
            swelling, breathing problems, and in more severe cases, anaphylactic
            shock within minutes to hours.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Weight Loss On Demand can address a number of your allergy-related needs
            including access to a doctor when and where you need it,
            prescriptions and allergic reaction preparedness plans.
          </Text>
        </View>
        <View style={[styles.padding,styles.paddingBottom]}>
          <Text style={styles.textColor}>
            We also provide an assessment of your living environment to keep it
            allergy-free. Your Weight Loss On Demand physician will work with you
            during the video visit to identify things in your home that may be
            contributing to your symptoms.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

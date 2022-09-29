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
export default function Travel() {
  return (
    <SafeAreaView>
      <Header title={'Travel'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.travel} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Travel</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Travel is exciting: new places, new foods, new experiences.
            Unfortunately, travel can also bring with it exposure to pathogens,
            germs and overall stress on your body. Weight Loss on Demand can assist
            in all stages of travel. Whether you are about to travel, are
            currently traveling or have just returned from a trip, Weight Loss on
            Demand Video Visits are available wherever you have internet access,
            which can be very assuring!
          </Text>

          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>About to Travel</Text>
          </View>
          <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              If you are about to travel, we can provide you with advice on
              travel medicines, vaccines, prophylactic measures, foods and
              liquids to avoid, how to keep yourself safe, current and prevalent
              illnesses in the area, and signs and symptoms to look out for. For
              example, there is a clinical trial that showed Pepto Bismol, taken
              7-14 days in advance of a trip to certain areas of the world, can
              vastly reduce the chances of gastro-intestinal flu and traveler's
              vomiting and diarrhea. Why learn about what could have helped
              after you return? Consult with one of our physicians so we can
              help you make the most of your trip and stay healthy.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>During Travel</Text>
          </View>
          <View style={[styles.paddingTop2]}>
            <Text style={styles.textColor}>
              Weight Loss On Demand is available everywhere domestically by
              smartphone, tablet or computer, and if traveling internationally,
              you can connect with a physician from anywhere you have internet
              access. Imagine you're away from home, you don't know local
              doctors and you aren't feeling well. Connect with a doctor for a
              Video Visit. Our doctor's can tell you whether your condition
              requires urgent care, if you can wait to be treated or if it's
              something that needs to run its course. While they cannot
              prescribe medications internationally, the physicians at Weight Loss On
              Demand Professionals can diagnose your condition, suggest
              medications that may be available where you are, share
              non-prescription remedies, inform you of medical treatments to
              avoid and determine if you should adjust your travel plans. Don't
              let an illness ruin your travel. We can help, at the very least in
              the short-term, and put your mind at ease.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.heading2}>Returned from Travel</Text>
          </View>
          <View style={[styles.paddingTop2,styles.paddingBottom]}>
            <Text style={styles.textColor}>
              To effectively diagnose and treat post-travel conditions, the
              physicians at Weight Loss On Demand Professionals can ask about your
              travel history, review your history and perform an examination,
              combine that with accepted medical knowledge of triggers common to
              those regions, and help determine and coordinate any necessary
              follow-up care.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

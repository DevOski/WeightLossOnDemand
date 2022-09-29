import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {Checkbox} from 'react-native-paper';
import {colors} from '../../services';

export default function GenerateReciept() {
  const [checked, setChecked] = useState(true);
  const [detailReceipt, setDetailReceipt] = useState(false);

  return (
    <SafeAreaView>
      <View>
        <Header title={'Reciept'} done={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.head}>Choose a type of receipt</Text>
        </View>
        <View style={[styles.row, styles.padding]}>
          <View style={{bottom: 5}}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(true);
                setDetailReceipt(false);
                
              }}
              color={'#be1d2d'}
              uncheckColor={colors.secondary}
            />
          </View>
          <View>
            <Text style={styles.head2}>Simple Reciept</Text>
            <Text style={styles.text}>
              Includes basics like cost, date of visit, and provider name
            </Text>
          </View>
        </View>
        <View style={[styles.row, styles.padding]}>
          <View style={{bottom: 5}}>
            <Checkbox
              status={detailReceipt ? 'checked' : 'unchecked'}
              onPress={() => {
                setDetailReceipt(true);
                setChecked(false);
              }}
              color={'#be1d2d'}
              uncheckColor={colors.secondary}
            />
          </View>
          <View>
            <Text style={styles.head2}>Detail Reciept</Text>
            <Text style={styles.text}>
              This receipt includes additional billing details and diagnosis
              codes required for insurance reimbursement.
            </Text>
          </View>
        </View>
        <View style={styles.paddingTop}>
          <TouchableOpacity
          // onPress={() => navigation.navigate('GetCare')}
          >
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Generate Reciept</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

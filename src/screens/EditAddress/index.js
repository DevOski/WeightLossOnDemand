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
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function EditAddress() {
  const [address, setAddress] = useState('Lorem ipsum dolor smit');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [showState, setShowState] = useState(false);
  const [stateList, setStateList] = useState([
    ' ',
    'AL',
    'AK',
    'AZ',
    'AR',
    'AA',
    'AE',
    'AP',
    'CA',
    'CO',
    'CT',
    'DE',
    'DC',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NE',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ]);

  const handleState = item => {
    setState(item);
    setShowState(false);
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Update your address</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Address'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setAddress(text)}
            value={address}
          />
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Address 2'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setAddress2(text)}
            value={address2}
          />
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'City'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setCity(text)}
            value={city}
          />
        </View>
        {showState && (
          <View style={styles.dropdown}>
            <ScrollView>
              {stateList?.map((item, index) => {
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleState(item)}>
                    <Text style={styles.listText}>{item}</Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}
        <View style={styles.row}>
          <View style={styles.stateView}>
            <TouchableOpacity>
              <TextInput
                mode="contain"
                label={'State'}
                onPressIn={() => setShowState(!showState)}
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setState(text)}
                value={state}
                right={
                  <TextInput.Icon
                    onPress={() => setShowState(!showState)}
                    name="chevron-down"
                    color={colors.secondary}
                    style={styles.icon}
                  />
                }
              />
            </TouchableOpacity>
          </View>
          <View style={styles.zipView}>
            <TextInput
              mode="contain"
              label={'Zip Code'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setAddress2(text)}
              value={address2}
              keyboardType={'numeric'}
            />
          </View>
        </View>
        <View style={styles.top}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

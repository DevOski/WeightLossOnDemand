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
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../services';
import {TextInput} from 'react-native-paper';

export default function AddPaymentMethod() {
  const [cardNum, setCardNum] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [showState, setShowState] = useState(false);

  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Payment Method'} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Add Payment Method</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Credit Card Number'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setCardNum(text)}
            value={cardNum}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.row}>
          <View style={styles.zipView}>
            <TextInput
              mode="contain"
              label={'Expiration (MM/YY)'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setExpirationDate(text)}
              value={expirationDate}
              keyboardType={'numeric'}
            />
          </View>
          <View style={styles.stateView}>
            <TextInput
              mode="contain"
              label={'CVV'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setCvv(text)}
              value={cvv}
            />
          </View>
        </View>

        <View style={[styles.zipView, styles.marginLeft, styles.marginTop]}>
          <TextInput
            mode="contain"
            label={
              country == 'Canada' ? 'Billing Postal Code' : 'Billing Zip Code'
            }
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setPostalCode(text)}
            value={postalCode}
            keyboardType={'numeric'}
          />
        </View>
        <View style={[styles.padding]}>
          <TextInput
            mode="contain"
            label={'Country'}
            onPressIn={() => setShowState(!showState)}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            value={country}
            right={
              <TextInput.Icon
                onPress={() => setShowState(!showState)}
                name="chevron-down"
                color={colors.secondary}
                style={styles.icon}
              />
            }
          />
          {showState && (
            <View style={styles.cardView}>
              <TouchableOpacity
                onPress={() => {
                  setCountry('United States');
                  setShowState(false);
                }}>
                <Text style={styles.listText}>United States</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setCountry('Canada');
                  setShowState(false);
                }}>
                <Text style={styles.listText}>Canada</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.top}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save Credit Card</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <Text style={styles.text}>
            {' '}
            <Text style={styles.bold}>Note: </Text> This will replace any
            payment method on file.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

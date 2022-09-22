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
import {TextInput} from 'react-native-paper';
import {styles} from './style';
import {colors} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function AddEmployer() {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Add Employer</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text}>
              Search for the company that covers your visits
            </Text>
          </View>
          <View style={styles.row}>
            <FontAwesome
              name="search"
              color={colors.secondary}
              size={20}
              style={styles.searchIcon}
            />
            <TextInput
              clearButtonMode
              mode="contain"
                value={search}
              placeholder={'e.g. Comcast, American Airlines'}
              onChangeText={text => setSearch(text)}
              activeUnderlineColor={colors.secondary}
              style={styles.input}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

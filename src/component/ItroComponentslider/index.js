import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {styles} from './style';
const deviceWidth = Dimensions.get('window').height;
const deviceHeight = Dimensions.get('window').width;
import dc from '../../assets/dc.jpg';
import icon from '../../assets/icon.png';
// import AppIntroSlider from 'react-native-app-intro-slider';
import cropimge from '../../assets/cropimge.png';
const slides = [
  {
    key: 'one',
    title: 'Title 1',
    image: require('../../assets/dc.jpg'),
    icon: require('../../assets/icon.png'),
    text: ' Doctor on Demand by Included Health makes it easy to see top-rated medical providers, psychiatrists, and therapists on demand.',
    // backgroundColor: '#59b2ab',
  },
  {
    key: 'two',
    title: 'Title 2',
    image1: require('../../assets/ganjadctr.jpg'),
    image2: require('../../assets/dctr.jpg'),
    image3: require('../../assets/fedoctr.jpg'),
    image4: require('../../assets/cropimge.png'),
    text: "Tell us your or your child's symptoms and you'll see aboard-certified provider within minutes, 24/7, any day of the year.",
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Rocket guy',
    image5: require('../../assets/mapcrop.png'),
    text: 'Your provider will send prescriptions to the pharmacy of your choice.',
    backgroundColor: '#22bcb5',
  },
  {
    key: 'four',
    title: 'Rocket guy',
    image5: require('../../assets/mapcrop.png'),
    text: 'Find the medical and mental health providers who fit you best and see them again, right from your smartphone, tablet, or computer.',
  },
];
const Slide = ({item}) => {
  return (
    <View style={styles.container}>
      {item.key == 'one' && (
        <View style={styles.imag}>
          <View style={styles.imagsize}>
            <Image
              style={{width: '100%', height: '100%'}}
              source={item.image}
            />
          </View>
          <View style={styles.iconalignment}>
            <Image source={item.icon} />
          </View>
          <View style={styles.textlignment}>
            <Text style={styles.textFontsize}>{item.text}</Text>
          </View>
          <View style={styles.footerContainer}>
            <View style={styles.footer}>
              <TouchableOpacity>
                <Text style={styles.signstyle}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.signstyle}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {item.key == 'two' && (
        <View style={styles.imag}>
          <View style={styles.flexi}>
            <View style={styles.imagsizepro1}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={item.image1}
              />
            </View>
            <View style={styles.imagsizepro2}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={item.image2}
              />
            </View>
            <View style={styles.imagsizepro3}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={item.image3}
              />
            </View>
          </View>
          <View style={styles.fo}>
            <View style={styles.imgefour}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={item.image4}
              />
            </View>
          </View>
          <View style={styles.textlignment2}>
            <Text style={styles.textFontsize}>{item.text}</Text>
          </View>
          <View style={styles.footerContainer2}>
            <View style={styles.footer}>
              <TouchableOpacity>
                <Text style={styles.signstyle}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.signstyle}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {item.key == 'three' && (
        <View style={styles.imag}>
          <View style={styles.flexi2}>
            <View style={styles.imagsizepro5}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={item.image5}
              />
            </View>
          </View>

          <View style={styles.textlignment2}>
            <Text style={styles.textFontsize}>{item.text}</Text>
          </View>
          <View style={styles.footerContainer3}>
            <View style={styles.footer}>
              <TouchableOpacity>
                <Text style={styles.signstyle}>Sign In</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <Text style={styles.signstyle}>SignUp</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
      {item.key == 'four' && (
        <View style={styles.imag}>
          <View style={{justifyContent: 'center', alignItems: 'center',marginTop:30}}>
            <Text style={styles.textFontsize}>Total virtual Care</Text>
          </View>
          <View style={{marginTop:30}}>
            <Text style={styles.textFontsize}>
              Find the medical and mental health providers who fit you best and
              see them again, right from your smartphone, tablet, or computer.
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};
export const IntroComponent = () => {
  const [currentindex, setcurrentindex] = useState(0);
  handleScroll = e => {
    let index = Math.ceil(e.nativeEvent.contentOffset.x / 300);
    if (index != currentindex) {
      setcurrentindex(index);
    }
  };
  return (
    <ScrollView style={styles.scrolwidth}>
      <View>
        <FlatList
          data={slides}
          onScroll={e => handleScroll(e)}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Slide item={item} />}
        />
        <View style={styles.pagination}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                currentindex == index && {backgroundColor: 'red'},
              ]}
            />
          ))}
          {/* <View style={styles.dot} />
        <View style={styles.dot} />
        <View style={styles.dot} /> */}
        </View>
      </View>
    </ScrollView>
  );
};

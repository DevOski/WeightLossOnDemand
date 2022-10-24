import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GetCare from '../../components/GetCare';
import {sizes} from '../../services';
import {getUser} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {storeUserData} from '../../store/actions';
import {styles} from './style';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('');
  const [item, setItem] = useState([
    'Text1',
    'Text2',
    'Text3',
    'Text3',
    'Text4',
    // 'Text5',
  ]);
  const [imgActive, setImgActive] = useState(0);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      let response = await getUser(token);
      setUserName(response.data.data.first_name);
      dispatch(storeUserData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={[styles.row, styles.padding]}>
          <Image source={images.icon2} style={styles.icon} />
          <View>
            <Text style={styles.heading}> We're Hi {userName},</Text>
            <Text style={styles.welcomeText}> Welcome back</Text>
          </View>
          <View style={styles.transparentView}></View>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image source={images.setting} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.wrap}>
          {item?.map((item, index) => {
            return (
              <View key={index} style={styles.cardView}>
                {index == 0 && (
                  <ImageBackground
                    key={index}
                    source={images.bg1}
                    style={styles.bg}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('VideoPlayer', {
                          uri: 'https://www.youtube.com/embed/JLnycPtolfw',
                        })
                      }>
                      <View style={styles.playBtn}>
                        <Image
                          source={images.playIcon}
                          style={styles.playIcon}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.textView}>
                      <Text style={styles.text}>
                        What to expect during your initial visit?
                      </Text>
                    </View>
                    <View style={[styles.semiTextView, styles.row2]}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('HowItWorks')}>
                        <Text style={styles.semiText}>
                          How It Works <Text style={styles.symbol}> ›</Text>
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                )}
                {index == 1 && (
                  <View key={index} style={styles.padding}>
                    <Text style={[styles.heading, styles.top]}>Trainer</Text>
                    <Text style={styles.providerText}>
                      Our professional trainers can handle a wide range of
                      problems, such as:
                    </Text>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}> Customized diet plans</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}>Activity tracking</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}>Nutritional value plan</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}>Stress management</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}> High cholesterol</Text>
                    </View>

                    <View style={styles.btnTop}>
                      <GetCare />
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Medical')}>
                        <View style={styles.learnMoreBtn}>
                          <Text style={styles.learnMoreText}>Explore</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {/* {index == 2 && (
                  <View key={index} style={styles.padding}>
                    <Text style={[styles.heading, styles.top]}>
                      Mental health
                    </Text>
                    <Text style={styles.providerText}>
                      Our therapists and psychiatrists can help with:
                    </Text>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Depression & anxiety</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Workplace stress</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Addiction</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Trauma & loss</Text>
                    </View>
                    <View style={styles.btnTop2}>
                      <GetCare />
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('mentalhealthscreen')
                        }>
                        <View style={styles.learnMoreBtn}>
                          <Text style={styles.learnMoreText}>Learn more</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )} */}
                {index == 2 && (
                  <ImageBackground
                    key={index}
                    source={images.bg2}
                    style={styles.bg}>
                    <View style={styles.paddingBottom}></View>
                    <View style={styles.proudView}>
                      <Text style={styles.text2}>
                        We're more than just proud
                      </Text>
                      <Text style={styles.letUsText}>
                        Let us assist you in finding the right trainer for you.
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('beyondscreen')}>
                      <View style={[styles.learnMoreView, styles.row2]}>
                        <Text style={styles.semiText}>Learn more</Text>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                )}
                {index == 3 && (
                  <View key={index} style={[styles.padding]}>
                    <Text style={[styles.heading, styles.top]}>
                      Meet Our Professionals
                    </Text>

                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider1}
                        style={styles.providerImg}
                      />
                      <View>
                        <Text style={styles.providerHead}>Kiki Lwin, MD</Text>
                        <Text style={styles.providerProfession}>
                          Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider2}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Elizabeth Curlin, PhD
                        </Text>
                        <Text style={styles.providerProfession}>
                          Psychologist
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider3}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Tracie DeJarnette-Holl...
                        </Text>
                        <Text style={styles.providerProfession}>
                          Psychiatrist
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider4}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Diana Malone, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider5}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>Aline Daou, MD</Text>
                        <Text style={styles.providerProfession}>
                          Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider6}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Melissa Colbern, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={styles.seeBtn}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('meetOurproviders')}>
                        <View style={[styles.learnMoreBtn, styles.row2]}>
                          <Text style={styles.learnMoreText}>
                            Connect to all providers
                          </Text>
                          <Text style={styles.symbol}> ›</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {index == 4 && (
                  <View key={index} style={[styles.padding]}>
                    <Text style={[styles.heading, styles.top]}>
                      Recent Visit
                    </Text>

                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider1}
                        style={styles.providerImg}
                      />
                      <View>
                        <Text style={styles.providerHead}>Trainer</Text>
                        <Text style={styles.providerProfession}>
                          Townsend-scott,MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          sep 12,2022
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.he}>INSTRUCTIONS:</Text>
                    </View>
                    <View style={styles.het1}>
                      <Text style={styles.het}>
                        Recent Visit Please double-check your preferences, as
                        our stay was cut short. Check your connection and make
                        sure no other apps are operating in the background. The
                        members of our customer service team are ready at all
                        hours of the day and night to restore your service. If
                        you need help, you can contact us at 1-800-997-6196 or
                        support@weightlossondemand.com. Visit Details
                      </Text>
                    </View>
                    <View style={styles.seeBtn}>
                      <View style={styles.buttnView}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('VisitDetail')}>
                          <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                              View Full summary
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.wrapDot}>
          {item?.map((item, index) => {
            return (
              <View>
                <Text
                  key={index}
                  style={imgActive == index ? styles.dotActive : styles.dot}>
                  ▂▂
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

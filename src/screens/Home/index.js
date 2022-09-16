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
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('Tester');
  const [item, setItem] = useState([
    'Text1',
    'Text2',
    'Text3',
    'Text3',
    'Text4',
  ]);
  const [imgActive, setImgActive] = useState(0);

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
          <Image source={images.icon} style={styles.icon} />
          <View>
            <Text style={styles.heading}> Hi {userName},</Text>
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
              <View style={styles.cardView}>
                {index == 0 && (
                  <ImageBackground
                    key={index}
                    source={images.bg1}
                    style={styles.bg}>
                    <TouchableOpacity>
                      <View style={styles.playBtn}>
                        <Image
                          source={images.playIcon}
                          style={styles.playIcon}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.textView}>
                      <Text style={styles.text}>
                        What to expect in your first {'    '}visit
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <View style={[styles.semiTextView, styles.row2]}>
                        <Text style={styles.semiText}>How It Works</Text>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                )}
                {index == 1 && (
                  <View key={index} style={styles.padding}>
                    <Text style={[styles.heading, styles.top]}>Medical</Text>
                    <Text style={styles.providerText}>
                      Our providers can treat hundreds of issues,including:
                    </Text>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Sinus infections</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Cold & Flu</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Heartburn</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Sports Injuries</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> High cholesterol</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Rashes & skin issues</Text>
                    </View>
                    <View style={styles.btnTop}>
                      <GetCare />
                      <TouchableOpacity>
                        <View style={styles.learnMoreBtn}>
                          <Text style={styles.learnMoreText}>Learn more</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {index == 2 && (
                  <View key={index} style={styles.padding}>
                    <Text style={[styles.heading, styles.top]}>
                      Mental health
                    </Text>
                    <Text style={styles.providerText}>
                      Our therapists and psychiatrists {'                '} can
                      help with:
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
                      <TouchableOpacity>
                        <View style={styles.learnMoreBtn}>
                          <Text style={styles.learnMoreText}>Learn more</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {index == 3 && (
                  <ImageBackground
                    key={index}
                    source={images.bg2}
                    style={styles.bg}>
                    <View style={styles.paddingBottom}></View>
                    <View style={styles.proudView}>
                      <Text style={styles.text}>
                        We're proud beyond {'              '} Pride
                      </Text>
                      <Text style={styles.letUsText}>
                        Let us help you find the right {'        '} LGBQTQ+
                        friendly doctor
                      </Text>
                    </View>
                    <TouchableOpacity>
                      <View style={[styles.learnMoreView, styles.row2]}>
                        <Text style={styles.semiText}>Learn more</Text>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                )}
                {index == 4 && (
                  <View key={index} style={[styles.padding]}>
                    <Text style={[styles.heading, styles.top]}>
                      Meet Our Providers
                    </Text>

                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider1}
                        style={styles.providerImg}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          {'  '} Kiki Lwin, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          {'   '} Medical Doctor
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
                          {'  '} Elizabeth Curlin, PhD
                        </Text>
                        <Text style={styles.providerProfession}>
                          {'   '} Psychologist
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
                          {'  '} Tracie DeJarnette-Holl...
                        </Text>
                        <Text style={styles.providerProfession}>
                          {'   '} Psychiatrist
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
                          {'  '} Diana Malone, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          {'   '} Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider5}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          {'  '} Aline Daou, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          {'   '} Medical Doctor
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
                          {'  '} Melissa Colbern, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          {'   '} Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={styles.seeBtn}>
                      <TouchableOpacity>
                        <View style={[styles.learnMoreBtn, styles.row2]}>
                          <Text style={styles.learnMoreText}>
                            See all of our providers{' '}
                          </Text>
                          <Text style={styles.symbol}> ›</Text>
                        </View>
                      </TouchableOpacity>
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

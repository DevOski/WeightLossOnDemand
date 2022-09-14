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
export default function SharePromo() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Share'} />
        </View>
        <View style={styles.userView}>
          <View style={styles.alignCenter}>
            <Text style={styles.btnText}>SHARE YOUR PROMO CODE</Text>
            <Text style={styles.code}>TESTER42</Text>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={styles.shareText}>
            Share your promocode with your friends and family. They'll get $10
            off their first visit (not eligible with insurance).
          </Text>
        </View>
        <View style={[styles.row, styles.padding, styles.between]}>
          <View>
            <TouchableOpacity>
              <Image source={images.fbDownloader} style={styles.icon} />
              <Text style={styles.iconText}>FB Video</Text>
              <Text style={styles.iconText}>Downloader</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={images.fb} style={styles.icon} />
              <Text style={styles.iconText}>Facebook</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={images.messenger} style={styles.icon} />
              <Text style={styles.iconText}>Messenger</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={images.message} style={styles.icon} />
              <Text style={styles.iconText}>Messages</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.row, styles.padding, styles.gmailView]}>
          <View>
            <TouchableOpacity>
              <Image source={images.gmail} style={styles.icon} />
              <Text style={styles.iconText}>Gmail</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image
                source={images.playServices}
                style={[styles.icon, styles.playIcon]}
              />
              <Text style={styles.iconText}>Google Play </Text>
              <Text style={styles.iconText}>services</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mailRight}>
            <TouchableOpacity>
              <Image source={images.mail} style={styles.icon} />
              <Text style={styles.iconText}>Mail</Text>
              <Text style={styles.iconText}></Text>
            </TouchableOpacity>
          </View>
          <View></View>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

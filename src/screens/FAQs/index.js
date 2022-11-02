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
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import {colors} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function FAQs() {
  const [faqs, setFAQs] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Header title={'FAQs'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.heading}>How often should I exercise?</Text>
          <Text style={styles.text}>
            Aim for at least 30 minutes of moderate physical activity each day.
            You might need to exercise more if you want to lose weight, keep it
            off, or reach certain fitness goals.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            What time of day is best to work out?
          </Text>
          <Text style={styles.text}>
            If you want to lose weight and burn fat, the best time to exercise
            is first thing in the morning. However, if you want to improve your
            performance, consider working out in the afternoon, after you've
            already had a meal or two. Compared to the mornings, the evenings
            are better for many measures of muscular fitness, such as strength,
            flexibility, power output, and endurance
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            Do I need to warm up before my workouts?
          </Text>
          <Text style={styles.text}>
            Warming up before working out has been shown to reduce the risk of
            injury and increase the efficiency of workouts. This pre-workout
            regimen needs to last for at least 6 minutes. You can spend as much
            time as you like warming up.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            How do I stay motivated to continue working out?
          </Text>
          <Text style={styles.text}>
            Inspirational quotations are a good way to reinvigorate our fitness
            dedication, and music may be a good way to get into a fitness
            rhythm. Keep them both in your back pocket when you need a mantra or
            song to help you through those last reps. But there are also
            established strategies to help get you revved up in the first place.
          </Text>
          <Text style={styles.text}>
            • Your Hard-and-Fast Rules Were Made to Be Broken
          </Text>
          <Text style={styles.text}>
            • A Little Friendly Competition Can Light a Fire
          </Text>
          <Text style={styles.text}>
            • Find a Friend Who Won't Let You Off the Hook
          </Text>
          <Text style={styles.text}>
            • Stop Making Exercise About How You Look
          </Text>
          <Text style={styles.text}>
            • Double Tap or Tag Your Friends on Social to Boost Your Fitness
            Game
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>
            What's the best type of workout for weight loss?
          </Text>
          <Text style={styles.text}>
            • When trying to lose weight, walking is one of the best workouts
            you can do.
          </Text>
          <Text style={styles.text}>
            • Jogging and running are excellent ways to burn calories and trim
            down.
          </Text>
          <Text style={styles.text}>
            • People who want to shed pounds often turn to weight training.
          </Text>
          <Text style={styles.text}>
            • High intensity interval training (HIIT) is a frequent name for
            interval training, which simply refers to the same concept but with
            a shorter name.
          </Text>
          <Text style={styles.text}>
            • Aquatic exercise, like swimming, can help you become in shape
            while also being a lot of fun.
          </Text>
          <Text style={styles.text}>
            • Many people turn to yoga as a means of physical activity and
            stress relief.
          </Text>
          <Text style={styles.text}>
            • Pilates is an excellent, low-impact exercise that may aid in
            weight loss, especially for newcomers.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

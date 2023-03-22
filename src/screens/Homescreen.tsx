import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeHeaderSection from '../components/WelcomeHeaderSection';

type Props = {};

const Homescreen = (props: Props) => {
  return (
    <View>
      <WelcomeHeaderSection
        name="Sarah Schaller"
        avatar="https://res.cloudinary.com/kolynz-b/image/upload/v1638636909/ko.lynz_b_218871186_831566384142117_7643572219233961744_n_wcsj3e.jpg"
      />
    </View>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});

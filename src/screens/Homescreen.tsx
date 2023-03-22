import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WelcomeHeaderSection from '../components/WelcomeHeaderSection';
import {ScreenView, Spacer} from '../components/layout';
import SearchBar from '../components/SearchBar';
import SectionHeaderTitle from '../components/SectionHeaderTitle';

type Props = {};

const Homescreen = (props: Props) => {
  return (
    <ScreenView>
      <WelcomeHeaderSection
        name="Sarah Schaller"
        avatar="https://res.cloudinary.com/kolynz-b/image/upload/v1638636909/ko.lynz_b_218871186_831566384142117_7643572219233961744_n_wcsj3e.jpg"
      />
      <Spacer size={15} />
      <SearchBar />
      <Spacer size={15} />
      <SectionHeaderTitle heading="Special Offers" />
    </ScreenView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});

import {Image, ImageURISource, StyleSheet} from 'react-native';

import React from 'react';
import {Icon, Text, View} from './layout';
import colors from '../constants/colors';

type Props = {
  name: string;
  avatar: ImageURISource['uri'];
};

const WelcomeHeaderSection = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <Image
          style={styles.avatar}
          source={{
            uri: props.avatar,
          }}
        />
        <View style={styles.wordcontainer}>
          <Text style={styles.greeting}>Good Morning 👋🏿</Text>
          <Text style={styles.username}>{props.name}</Text>
        </View>
      </View>
      <View style={styles.rightcontainer}>
        <Icon name="bell-outline" size="extraLarge" color="gray" />
        <Icon name="cards-heart-outline" size="extraLarge" color="gray" />
      </View>
    </View>
  );
};

export default WelcomeHeaderSection;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderColor: 'red',
    borderRadius: 50,
    borderWidth: 2,
    resizeMode: 'cover',
    overflow: 'hidden',
  },
  leftcontainer: {
    flexDirection: 'row',
    alignCenter: 'center',
  },
  rightcontainer: {
    flexDirection: 'row',
    // backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 45,
  },
  greeting: {
    color: colors.gray[2],
    fontWeight: '100',
  },
  username: {
    color: colors.black[1],
    fontWeight: '400',
    fontSize: 18,
  },
  wordcontainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 2,
  },
});

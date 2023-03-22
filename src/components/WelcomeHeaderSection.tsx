import {Image, StyleSheet} from 'react-native';

import React from 'react';
import {Icon, Text, View} from './layout';
import colors from '../constants/colors';

type Props = {
  name: string;
  avatar: string;
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
        <Icon name="bell-outline" size="small" color="gray" />
        <Icon name="cards-heart-outline" size="small" color="gray" />
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
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'green',
  },
  avatar: {
    width: 50,
    height: 50,
    borderColor: 'red',
    borderRadius: 50,
    borderWidth: 2,
    resizeMode: 'cover',
  },
  leftcontainer: {
    flexDirection: 'row',
  },
  rightcontainer: {
    flexDirection: 'row',
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
    paddingVertical: 2,
  },
});

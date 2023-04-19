import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../../constants/colors';

type Props = {
  brandName: string;
};

const BrandBadge = ({brandName}: Props) => {
  return (
    <View style={styles.brandContainer}>
      <Text style={styles.brand}>{brandName}</Text>
      
    </View>
  );
};

export default BrandBadge;

const styles = StyleSheet.create({
  brandContainer: {
    backgroundColor: colors.gray[1],
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5,
  },
  brand: {
    fontWeight: '300',
    fontSize: 14,
    color: colors.black[1],
    opacity: 0.8,
  },
});

import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import {Text} from '../layout';
import Icon, {IconProps} from '../layout/Icon';
import COLORS from '../../constants/colors';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  iconName: IconProps['name'];
  style?: ViewStyle;
}

const LargeBtn: FC<CustomButtonProps> = ({
  title,
  iconName,
  onPress,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}>
      <Icon name={iconName} size="extraLarge" color="white" />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: COLORS.black[1],
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 50,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 10,
  },
});

export default LargeBtn;

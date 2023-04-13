import React, {FC} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TouchableOpacityProps,
} from 'react-native';
import {Text} from '../layout';
import Icon, {IconProps} from '../layout/Icon';

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  iconname: IconProps['name'];
  style?: ViewStyle;
}

const LargeBtn: FC<CustomButtonProps> = ({
  title,
  iconname,
  onPress,
  style,
  ...rest
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      {...rest}>
      <Icon name={iconname} size="extraLarge" color="white" />

      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  title: {
    fontSize: 16,
    color: '#FFFFFF',
  },
});

export default LargeBtn;

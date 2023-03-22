import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';

MIcon.loadFont();

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: React.ComponentProps<typeof MIcon>['name'];
  color: string;
  style?: any;
}

export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
};

const Icon = ({size, name, color, style}: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} style={style} />
);

export default Icon;

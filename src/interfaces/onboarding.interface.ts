import {ImageProps} from 'react-native';

export interface IOnboardingPage extends Pick<ImageProps, 'source'> {
  title: string;
  description: string;
}

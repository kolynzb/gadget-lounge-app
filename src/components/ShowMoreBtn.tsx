import React, {useState} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';

interface ShowMoreProps {
  height?: number;
  showMoreText?: string;
  showLessText?: string;
  buttonColor?: string;
  children: any;
}

const ShowMore: React.FC<ShowMoreProps> = ({
  height = 250,
  showMoreText = 'Show More',
  showLessText = 'Show Less',
  buttonColor = '#AAAAFF',
  children,
}) => {
  const [showMoreBoxIsOpened, setShowMoreBoxIsOpened] = useState(false);
  const [showMoreHeight, setShowMoreHeight] = useState(height);

  const onPressShowMore = () => {
    setShowMoreBoxIsOpened(true);
    setShowMoreHeight(0);
  };

  const onPressShowLess = () => {
    setShowMoreBoxIsOpened(false);
    setShowMoreHeight(height);
  };

  return (
    <View>
      <ScrollView style={{height: showMoreHeight}} scrollEnabled={false}>
        {children}
      </ScrollView>
      <View
        style={{
          borderWidth: 0.8,
          borderRadius: 0,
          borderColor: 'rgba(0, 0, 0, 0.0)',
          shadowColor: '#999',
          shadowOffset: {width: 0, height: 0},
          shadowOpacity: 1.0,
          shadowRadius: 0,
          elevation: 10,
          top: -10,
          height: 0,
          width: Dimensions.get('window').width * 2,
          backgroundColor: 'rgba(0, 0, 0, 0.0)',
          flex: 1,
        }}
      />
      <TouchableOpacity
        style={{
          height: 30,
          width: Dimensions.get('window').width * 2,
          top: 2,
          left: 10,
        }}
        onPress={() => {
          showMoreBoxIsOpened ? onPressShowLess() : onPressShowMore();
        }}>
        <View>
          <Text style={{color: buttonColor}}>
            {showMoreBoxIsOpened ? showLessText : showMoreText}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ShowMore;

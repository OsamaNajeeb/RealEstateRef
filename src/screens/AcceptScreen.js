import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useRef, useState} from 'react';
import ScrollDownArrow from '../assets/svg/arrowcirledown';
import BackArrowIcon from '../assets/svg/arrowleftbackreal';

export default function AcceptScreen() {
  const [showArrow, setShowArrow] = useState(true);
  const scrollViewRef = useRef(null);

  const handleScroll = event => {
    const {y} = event.nativeEvent.contentOffset;
    setShowArrow(y < 10);
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  };
  return (
    <View>
      <View style={homeStyle.topContainer}>
        <BackArrowIcon />
        <Text style={homeStyle.centeredText}>My Post</Text>
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{padding: 15, flexGrow: 1, paddingBottom: 120}}
        onScroll={handleScroll}
        scrollEventThrottle={16}></ScrollView>
      {showArrow && (
        <TouchableOpacity
          onPress={scrollToBottom}
          style={homeStyle.arrowContainer}>
          <View>
            <ScrollDownArrow />
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
}

const homeStyle = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#242424',
    height: 80,
    position: 'relative',
  },
  centeredText: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
});

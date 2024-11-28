import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import NotificationAlertIcon from '../assets/svg/notificationexist';
import ScrollDownArrow from '../assets/svg/arrowcirledown';
import AtlassianLogo from '../assets/svg/atlassianlogo';
import PurpleGDyIcon from '../assets/svg/purpledynmicbtn';

export default function HomeScreen() {
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
        <View style={homeStyle.imageContainer}>
          <Image
            source={require('../assets/png/abby.png')}
            style={homeStyle.profileImage}
          />
        </View>

        <View style={homeStyle.textContainer}>
          <Text style={homeStyle.titleText}>Hello! Mrs. Abby</Text>
          <Text style={homeStyle.subtitleText}>
            Let's start finding your dream job
          </Text>
        </View>

        <View style={homeStyle.notificationContainer}>
          <NotificationAlertIcon />
        </View>
      </View>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{padding: 15, flexGrow: 1, paddingBottom: 70}}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={{marginTop: 35}}>
          <Text
            style={{color: 'black', fontFamily: 'Poppins-Bold', fontSize: 20}}>
            Job Request
          </Text>
        </View>
        <View
          style={{
            borderColor: '#D0D0D0',
            borderWidth: 2,
            borderRadius: 10,
            padding: 5,
            backgroundColor: 'white',
            marginVertical: 10,
            flex: 0.3,
            padding: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 10,
                backgroundColor: '#F1F1F1',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <AtlassianLogo />
            </View>
            <View style={{marginLeft: 10, justifyContent: 'center'}}>
              <Text
                style={{
                  fontSize: 10,
                  fontFamily: 'Poppins-Medium',
                  color: '#505050',
                }}>
                John-California-Los Angeles
              </Text>
              <Text
                style={{
                  fontSize: 13,
                  color: '#242424',
                  fontFamily: 'Poppins-Bold',
                }}>
                Referral Price: 40%
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: 'auto',
                marginBottom: 'auto',
              }}>
              <Text
                style={{
                  textAlign: 'right',
                  fontSize: 9,
                  color: 'red',
                  fontFamily: 'Poppins-Italic',
                }}>
                2h 30m left
              </Text>
            </View>
          </View>
          <Text
            style={{fontSize: 10, marginTop: 10, fontFamily: 'Poppins-Medium'}}>
            Loan Approved for/Max Purchase Price {'\n'}$20/$50
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                color: '#3277DD',
                marginTop: 5,
                fontSize: 12,
                fontFamily: 'Poppins-Medium',
                flex: 0.7,
              }}>
              1h ago
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginLeft: 'auto',
              }}>
              <View style={{marginHorizontal: 5}}>
                <PurpleGDyIcon label="Accept" />
              </View>
              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: 28, // Match the height of PurpleGDyIcon
                  borderRadius: 5,
                  paddingHorizontal: 10,
                  backgroundColor: '#E2E2E2',
                  width: 75, // Match the width of PurpleGDyIcon
                  marginHorizontal: 5, // Add similar margin
                }}>
                <Text
                  style={{
                    fontSize: 12,
                    fontFamily: 'Poppins-Regular',
                    color: 'black',
                  }}>
                  Decline
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      {/* {showArrow && (
        <TouchableOpacity
          onPress={scrollToBottom}
          style={homeStyle.arrowContainer}>
          <View>
            <ScrollDownArrow />
          </View>
        </TouchableOpacity>
      )} */}
    </View>
  );
}

const homeStyle = StyleSheet.create({
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: '#242424',
    height: 100,
  },
  imageContainer: {
    height: 70,
    width: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'white',
  },
  subtitleText: {
    fontSize: 14,
    color: '#D9D9D9',
  },
  notificationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  arrowContainer: {
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
});

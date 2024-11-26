import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import NotificationAlertIcon from '../assets/svg/notificationexist';

export default function HomeScreen() {
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
});

import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import HomeScreen from './HomeScreen';
import NeonHomeIconActive from '../assets/svg/neonhomefilled';
import NeonHomeEmpty from '../assets/svg/neonhome';
import PostScreen from './PostScreen';
import NeonPostIcon from '../assets/svg/neonpost';
import NeonPostFilledIcon from '../assets/svg/neonpostfilled';
import ReferralsScreen from './ReferralsScreen';
import NeonReferralsIcon from '../assets/svg/neonreferrals';
import NeonReferralsFilledIcons from '../assets/svg/neonreferralsfilled';
import KeytoFailureScreen from './KeytoFailureScreen';
import NeonKTSIcon from '../assets/svg/neonkts';
import NeonKTSFilledIcon from '../assets/svg/neonktsfilled';

export default function CommandCentreScreen() {
  const [activeTab, setActiveTab] = useState('Post');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Post':
        return <PostScreen />;
      case 'Referrals':
        return <ReferralsScreen />;
      case 'KTS':
        return <KeytoFailureScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={ccStyles.container}>
      <View style={ccStyles.content}>{renderScreen()}</View>

      <View style={ccStyles.bottomNav}>
        <TouchableOpacity
          style={ccStyles.navItem}
          onPress={() => setActiveTab('Home')}>
          {activeTab === 'Home' ? <NeonHomeIconActive /> : <NeonHomeEmpty />}
          <Text
            style={[
              ccStyles.navLabel,
              {color: activeTab === 'Home' ? 'blue' : 'gray'},
            ]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ccStyles.navItem}
          onPress={() => setActiveTab('Post')}>
          {activeTab === 'Post' ? <NeonPostFilledIcon /> : <NeonPostIcon />}
          <Text
            style={[
              ccStyles.navLabel,
              {color: activeTab === 'Post' ? 'blue' : 'gray'},
            ]}>
            Post
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ccStyles.navItem}
          onPress={() => setActiveTab('Referrals')}>
          {activeTab === 'Referrals' ? (
            <NeonReferralsFilledIcons />
          ) : (
            <NeonReferralsIcon />
          )}
          <Text
            style={[
              ccStyles.navLabel,
              {color: activeTab === 'Referrals' ? 'blue' : 'gray'},
            ]}>
            Referrals
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ccStyles.navItem}
          onPress={() => setActiveTab('KTS')}>
          {activeTab === 'KTS' ? <NeonKTSFilledIcon /> : <NeonKTSIcon />}
          <Text
            style={[
              ccStyles.navLabel,
              {color: activeTab === 'KTS' ? 'blue' : 'gray'},
            ]}>
            KTS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const ccStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
  },
  bottomNav: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: 'white',
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLabel: {
    fontSize: 12,
    marginTop: 5,
  },
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

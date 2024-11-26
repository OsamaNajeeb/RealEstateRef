import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import HomeScreen from './HomeScreen';

function SearchScreen() {
  return (
    <View style={styles.screen}>
      <Text>Search Screen</Text>
    </View>
  );
}

function NotificationsScreen() {
  return (
    <View style={styles.screen}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.screen}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function CommandCentreScreen() {
  const [activeTab, setActiveTab] = useState('Home');

  const renderScreen = () => {
    switch (activeTab) {
      case 'Home':
        return <HomeScreen />;
      case 'Search':
        return <SearchScreen />;
      case 'Notifications':
        return <NotificationsScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Render the active screen */}
      <View style={styles.content}>{renderScreen()}</View>

      {/* Custom Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('Home')}>
          {/* <HomeIcon fill={activeTab === 'Home' ? 'blue' : 'gray'} /> */}
          <Text
            style={[
              styles.navLabel,
              {color: activeTab === 'Home' ? 'blue' : 'gray'},
            ]}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('Search')}>
          {/* <SearchIcon fill={activeTab === 'Search' ? 'blue' : 'gray'} /> */}
          <Text
            style={[
              styles.navLabel,
              {color: activeTab === 'Search' ? 'blue' : 'gray'},
            ]}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('Notifications')}>
          {/* <NotificationsIcon
            fill={activeTab === 'Notifications' ? 'blue' : 'gray'}
          /> */}
          <Text
            style={[
              styles.navLabel,
              {color: activeTab === 'Notifications' ? 'blue' : 'gray'},
            ]}>
            Notifications
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => setActiveTab('Profile')}>
          {/* <ProfileIcon fill={activeTab === 'Profile' ? 'blue' : 'gray'} /> */}
          <Text
            style={[
              styles.navLabel,
              {color: activeTab === 'Profile' ? 'blue' : 'gray'},
            ]}>
            Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
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

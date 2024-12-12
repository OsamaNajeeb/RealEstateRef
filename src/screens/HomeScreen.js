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
import OfferComponent from '../assets/components/OfferComponent';
import AtlassianLogo from '../assets/svg/atlassianlogo';
import ExpiredLemonIcon from '../assets/svg/expiredLemon';
import ShopifyGarbageIcon from '../assets/svg/shopify';

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
        contentContainerStyle={{padding: 15, flexGrow: 1, paddingBottom: 120}}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={{marginTop: 10}}>
          <Text
            style={{color: 'black', fontFamily: 'Poppins-Bold', fontSize: 20}}>
            Job Request
          </Text>
        </View>
        <OfferComponent
          DynamicIcon={<AtlassianLogo />}
          ReferralName={'John-California'}
          ReferralPrice={40}
          hours={2}
          mins={30}
          loanApprovalOne={20}
          loanApprovalTwo={50}
          initialTime={1}
        />
        <OfferComponent
          DynamicIcon={<ExpiredLemonIcon />}
          ReferralName={'Umbreen-Dubai'}
          ReferralPrice={30}
          hours={4}
          mins={24}
          loanApprovalOne={34}
          loanApprovalTwo={78}
          initialTime={2}
        />
        <OfferComponent
          DynamicIcon={<AtlassianLogo />}
          ReferralName={'John-California'}
          ReferralPrice={33}
          hours={2}
          mins={33}
          loanApprovalOne={21}
          loanApprovalTwo={48}
          initialTime={1}
        />
        <OfferComponent
          DynamicIcon={<ShopifyGarbageIcon />}
          ReferralName={'Hana-Stockholm'}
          ReferralPrice={50}
          hours={1}
          mins={12}
          loanApprovalOne={45}
          loanApprovalTwo={75}
          initialTime={4}
        />
        <OfferComponent
          DynamicIcon={<ExpiredLemonIcon />}
          ReferralName={'Umbreen-Dubai'}
          ReferralPrice={30}
          hours={4}
          mins={24}
          loanApprovalOne={34}
          loanApprovalTwo={78}
          initialTime={2}
        />
      </ScrollView>
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

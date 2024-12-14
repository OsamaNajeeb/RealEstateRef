import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import BackArrowIcon from '../assets/svg/arrowleftbackreal';
import ScrollDownArrow from '../assets/svg/arrowcirledown';
import PostComponent from '../assets/components/PostComponent';
import AtlassianLogo from '../assets/svg/atlassianlogo';
import ExpiredLemonIcon from '../assets/svg/expiredLemon';
import ShopifyGarbageIcon from '../assets/svg/shopify';

export default function PostScreen() {
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
        scrollEventThrottle={16}>
        <PostComponent
          DynamicIcon={<AtlassianLogo />}
          ReferralName={'John-California'}
          ReferralPrice={40}
          loanApprovalOne={20}
          loanApprovalTwo={50}
          initialTime={1}
        />
        <PostComponent
          DynamicIcon={<ExpiredLemonIcon />}
          ReferralName={'Umbreen-Dubai'}
          ReferralPrice={30}
          loanApprovalOne={34}
          loanApprovalTwo={78}
          initialTime={2}
        />
        <PostComponent
          DynamicIcon={<AtlassianLogo />}
          ReferralName={'John-California'}
          ReferralPrice={33}
          loanApprovalOne={21}
          loanApprovalTwo={48}
          initialTime={1}
        />
        <PostComponent
          DynamicIcon={<ShopifyGarbageIcon />}
          ReferralName={'Hana-Stockholm'}
          ReferralPrice={50}
          loanApprovalOne={45}
          loanApprovalTwo={75}
          initialTime={4}
        />
        <PostComponent
          DynamicIcon={<ExpiredLemonIcon />}
          ReferralName={'Umbreen-Dubai'}
          ReferralPrice={30}
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
    height: 80,
    position: 'relative', // Required for absolute positioning
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

import {
  View,
  Text,
  Dimensions,
  StatusBar,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import NextRectangleIcon from '../assets/svg/customrecicon';
import GettingStartedBtn from '../assets/svg/customrecicontwo';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#fff'};

const slides = [
  {
    id: '1',
    image: require('../assets/png/slideone.png'),
    title: 'You can refer another agent & retain part of your commission',
    subtitle:
      'Unable to help your client to buy/sell in another state? \nHence, loosing all of your commission?',
  },
  {
    id: '2',
    image: require('../assets/png/slidetwo.png'),
    title: 'Finding leads that are already taken',
    subtitle:
      'Here you get, Individual Genuine referral/leads from license agents ONLY.',
  },
  {
    id: '3',
    image: require('../assets/png/slidethree.png'),
    title: 'Get Instant Notification',
    subtitle:
      'No more wasting time looking for referrals.\nGet instant notification when a referral in available in your area.',
  },
];

const Slide = ({item}) => {
  return (
    <View style={{width, alignItems: 'center'}}>
      <Image
        source={item.image}
        style={{height: '75%', width: '75%', resizeMode: 'contain'}}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: COLORS.primary,
          marginTop: 10,
          textAlign: 'center',
        }}>
        {item.title}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: COLORS.primary,
          marginTop: 15,
          paddingHorizontal: 15,
          textAlign: 'center',
        }}>
        {item.subtitle}
      </Text>
    </View>
  );
};

const OnBoardingScreenRE = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef(null);
  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 20,
          }}>
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styleOne.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#242424',
                },
              ]}
            />
          ))}
        </View>
        <View
          style={{
            position: 'absolute',
            bottom: 30,
            alignSelf: 'center',
          }}>
          <View
            style={{
              flex: 1,
              borderRadius: 5,
              backgroundColor: 'white',
            }}>
            {currentSlideIndex == slides.length - 1 ? (
              <GettingStartedBtn onPress={() => navigation.replace('test')} />
            ) : (
              <NextRectangleIcon onPress={goNextSlide} />
            )}
          </View>
        </View>
      </View>
    );
  };
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(nextSlideIndex);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        pagingEnabled
        data={slides}
        contentContainerStyle={{height: height * 0.65}}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <Slide item={item} />}
        keyExtractor={item => item.id}
      />
      <Footer />
    </SafeAreaView>
  );
};

const styleOne = StyleSheet.create({
  indicator: {
    height: 5,
    width: 30,
    backgroundColor: 'grey',
    marginHorizontal: 3,
    borderRadius: 2,
  },
});

export default OnBoardingScreenRE;

import {View, Text, StatusBar, Linking} from 'react-native';
import React, {useState} from 'react';
import AcctypeRectBtn from '../assets/components/AcctypeRectBtn';
import NextRectangleIcon from '../assets/svg/customrecicon';

export default function AccountType() {
  const [activeButton, setActiveButton] = useState(null);

  return (
    <View style={{padding: 15, flex: 1}}>
      <View style={{marginTop: 35}}>
        <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
          Job Finder
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Poppins-ExtraBold',
          }}>
          Please select your profession down below:
        </Text>
      </View>
      <View style={{flex: 1}}>
        <View
          style={{
            marginHorizontal: 10,
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
          }}>
          <AcctypeRectBtn
            iconType={1}
            label="Real Estate"
            isClicked={activeButton === 'Real Estate'}
            onPress={() => setActiveButton('Real Estate')}
          />
          <AcctypeRectBtn
            iconType={0}
            label="Plumber"
            isClicked={activeButton === 'Plumber'}
            onPress={() => setActiveButton('Plumber')}
          />
        </View>
        <View
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            marginTop: 30,
            position: 'relative',
          }}>
          <NextRectangleIcon />
        </View>
        <View style={{marginTop: 20, padding: 10}}>
          <Text>
            If your profession is not listed above please{' '}
            <Text
              style={{color: 'blue'}}
              onPress={() =>
                Linking.openURL(
                  'https://www.youtube.com/watch?v=4wO6cYMYblo&list=PLeIJUF3PiXDfBaEA10imClVSzH-WzXFXt&index=3',
                )
              }>
              contact
            </Text>{' '}
            us to include the requested profession.
          </Text>
        </View>
      </View>
    </View>
  );
}

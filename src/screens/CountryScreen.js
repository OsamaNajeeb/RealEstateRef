import {View, Text} from 'react-native';
import React from 'react';
import TextFieldThree from '../assets/components/TextFieldThree';
import DropDownIcon from '../assets/svg/dropdownarrow';
import DynamicBtn from '../assets/svg/dynamicbtn';

export default function CountryScreen({navigation}) {
  return (
    <View style={{padding: 15, flex: 1, backgroundColor: 'white'}}>
      <View style={{marginTop: 35}}>
        <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
          Job Finder
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{color: 'black', fontSize: 22, fontFamily: 'Poppins-Bold'}}>
          Which County you want to get referral/leads for?
        </Text>
      </View>
      <View style={{marginTop: 10}}>
        <Text style={{fontFamily: 'Poppins-Medium'}}>
          State Licenced<Text style={{color: 'red'}}>*</Text>
        </Text>
      </View>
      <TextFieldThree
        Label={'Select a County'}
        DynamicIconTwo={<DropDownIcon />}
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 20,
        }}>
        <DynamicBtn
          onPress={() => navigation.navigate('subscroble')}
          label={'Next'}
        />
      </View>
    </View>
  );
}

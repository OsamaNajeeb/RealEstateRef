import {View, Text, ScrollView} from 'react-native';
import React, {useRef, useState} from 'react';
import TextFieldTwo from '../assets/components/TextFieldTwo';
import TextFieldThree from '../assets/components/TextFieldThree';
import DropDownIcon from '../assets/svg/dropdownarrow';
import UploadCloudIcon from '../assets/svg/uploadcloud';
import DynamicBtn from '../assets/svg/dynamicbtn';

export default function LoicisneScreen() {
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
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        // ref={scrollViewRef}
        contentContainerStyle={{padding: 15, flexGrow: 1}}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={{marginTop: 35}}>
          <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
            Job Finder
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{color: 'black', fontSize: 22, fontFamily: 'Poppins-Bold'}}>
            Submit your licences
          </Text>
        </View>
        <View style={{marginTop: 20}}>
          <Text style={{fontFamily: 'Poppins-Medium'}}>
            Licence No<Text style={{color: 'red'}}>*</Text>
          </Text>
        </View>
        <TextFieldTwo />
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'Poppins-Medium'}}>
            State Licenced<Text style={{color: 'red'}}>*</Text>
          </Text>
        </View>
        <TextFieldThree DynamicIconTwo={<DropDownIcon />} />
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'Poppins-Medium'}}>
            Expiry Date<Text style={{color: 'red'}}>*</Text>
          </Text>
        </View>
        <TextFieldTwo />
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'Poppins-Medium'}}>
            Name of association
            <Text style={{color: 'red'}}>
              *
              <Text style={{color: '#D0D0D0'}}>
                (if you are NOT a part of any association then put N/A)
              </Text>
            </Text>
          </Text>
        </View>
        <TextFieldTwo />
        <View style={{marginTop: 10}}>
          <Text style={{fontFamily: 'Poppins-Medium'}}>
            Upload Pic of your Driver license/ID
            <Text style={{color: 'red'}}>*</Text>
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            borderColor: '#D0D0D0',
            borderWidth: 2,
            borderRadius: 10,
            padding: 5,
            height: 150,
            backgroundColor: 'white',
            borderStyle: 'dashed',
            marginVertical: 10,
          }}>
          <UploadCloudIcon style={{marginTop: 30}} />
          <Text
            style={{
              textAlign: 'center',
              marginTop: 10,
              color: '#64748B',
              fontSize: 13,
              fontFamily: 'Poppins-Medium',
            }}>
            Format DOC, PDF, JPG
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: '#1051F8',
              fontSize: 12,
              fontFamily: 'Poppins-Bold',
            }}>
            Browse Files
          </Text>
        </View>
        <View style={{marginTop: 10}}>
          <DynamicBtn label={'Submit'} />
        </View>
      </ScrollView>
    </View>
  );
}

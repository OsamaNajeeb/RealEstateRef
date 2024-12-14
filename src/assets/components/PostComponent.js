import {View, Text} from 'react-native';
import React from 'react';
import PurpleGDyIcon from '../svg/purpledynmicbtn';

export default function PostComponent({
  DynamicIcon,
  ReferralName,
  ReferralPrice,
  loanApprovalOne,
  loanApprovalTwo,
  initialTime,
}) {
  return (
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
          {DynamicIcon}
        </View>
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 10,
              fontFamily: 'Poppins-Medium',
              color: '#505050',
            }}>
            {ReferralName}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: '#242424',
              fontFamily: 'Poppins-Bold',
            }}>
            Referral Price: {ReferralPrice}%
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
              fontSize: 10,
              color: 'blue',
              fontFamily: 'Poppins-Medium',
            }}>
            {initialTime} hour ago
          </Text>
        </View>
      </View>
      <Text style={{fontSize: 10, marginTop: 10, fontFamily: 'Poppins-Medium'}}>
        Loan Approved for/Max Purchase Price {'\n'}${loanApprovalOne}/$
        {loanApprovalTwo}
      </Text>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginLeft: 'auto',
          }}>
          <View style={{marginHorizontal: 5}}>
            <PurpleGDyIcon label="Edit" />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              height: 28,
              borderRadius: 5,
              paddingHorizontal: 10,
              backgroundColor: '#E2E2E2',
              width: 75,
              marginHorizontal: 5,
            }}>
            <Text
              style={{
                fontSize: 12,
                fontFamily: 'Poppins-Regular',
                color: 'black',
              }}>
              Delete
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
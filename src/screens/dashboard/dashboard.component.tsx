
import { RootStackParamList } from './../../constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { View,Text, Touchable, TouchableOpacity } from 'react-native';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChangePasswordScreen'>;

export default function DashboardScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TouchableOpacity onPress={()=>{
            navigation.navigate('ChangePasswordScreen')
          }} >
          <Text>Dashboard Screen</Text>
          </TouchableOpacity>          
        </View>
      );
}
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RightIcon } from './../../assets/icons';
import { RootStackParamList } from './../../constants';
import { useDispatch } from 'react-redux';
import { authActions } from './../../store/auth/auth';
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

export default function LoginScreen() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
    } else {
      Alert.alert('Success', 'Logged in successfully!');
      dispatch(authActions.login() );
      navigation.navigate('Home');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={styles.inputContainer}>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
          <RightIcon  height={20} width={20} fill="white" />
          </View>
        </View>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    color: '#1D2433',
    fontSize: 28,
    fontFamily: 'Merriweather', // Ensure this font is available in your project
    fontWeight: '700', // or 'bold'
    lineHeight: 38,
    marginBottom: 20, // Add some space below the title
  },
  inputContainer: {
    width: '100%', // Ensure the input container takes full width
    paddingHorizontal: 16, // Add padding to align with the container padding
    marginBottom: 20,
  },
  label: {
    color: '#1D2433',
    fontFamily: "Inter",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: '500',
    lineHeight: 16,
    letterSpacing: 0.28,
    marginBottom: 8, // Add some space between label and input
  },
  input: {
    height: 'auto',
    borderColor: '#ccc',
    borderWidth: 1, // Add border width
    borderRadius: 8,
    paddingHorizontal: 14,
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 16, // Remove vertical padding to ensure height consistency
  },
  button: {
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 16,
    paddingBottom: 16,
    backgroundColor: '#3388E0',
    borderRadius: 8,
    borderWidth: 1, // Add border width
    //borderColor: '#1D2433', // Set the border color
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row', // To place icon and text in a row
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter', // Ensure this font is available in your project
    fontWeight: '600',
    lineHeight: 16,
    letterSpacing: 0.28,
  },
  iconContainer: {
    width: 16,
    height: 16,
    position: 'relative',
    marginLeft: 6, // Add margin to create gap
  },
  icon: {
    width: 11,
    height: 10,
    left: 2,
    top: 0,
    position: 'absolute',
  },
});

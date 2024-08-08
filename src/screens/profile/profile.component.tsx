
import React, { useState } from 'react';
import { View,Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useHttp } from './../hook'
interface UserData {
  id: number;
  name: string;
  email: string;
}

const  ProfileScreen = () => {
  const { data, loading, error } = useHttp<UserData[]>('https://jsonplaceholder.typicode.com/users');
  if (loading) {
    return <ActivityIndicator style={styles.centered} size="large" color="#0000ff" />;
  }
  if(error){
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );

  }
    return (
      <View style={styles.container}>
      {data?.map(user => (
        <View key={user.id} style={styles.userCard}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>{user.email}</Text>
        </View>
      ))}
    </View>
      );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 16,
  },
  userCard: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
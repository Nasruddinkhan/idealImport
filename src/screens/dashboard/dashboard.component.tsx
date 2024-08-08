import { RootStackParamList } from './../../constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { NCard, NPieChart } from './../../components/index';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ChangePasswordScreen'>;

export default function DashboardScreen() {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handlePress = () => {
    alert('Button Pressed!');
    navigation.navigate('ChangePasswordScreen');
  };

  const pieChartData = [
    {
      name: 'Seoul',
      population: 21500000,
      color: 'rgba(131, 167, 234, 1)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Toronto',
      population: 2800000,
      color: '#F00',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Beijing',
      population: 527612,
      color: 'red',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'New York',
      population: 8538000,
      color: '#ffffff',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
    {
      name: 'Moscow',
      population: 11920000,
      color: 'rgb(0, 0, 255)',
      legendFontColor: '#7F7F7F',
      legendFontSize: 15,
    },
  ];
  
  const itemList = [
    { id: '1', title: 'Item 1', description: 'Description for item 1' },
    { id: '2', title: 'Item 2', description: 'Description for item 2' },
    { id: '3', title: 'Item 3', description: 'Description for item 3' },
    { id: '4', title: 'Item 4', description: 'Description for item 4' },
    { id: '5', title: 'Item 5', description: 'Description for item 5' },
  ];

  const renderItem = ({ item }: { item: { id: string; title: string; description: string } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <TouchableOpacity
        style={styles.itemButton}
        onPress={() => alert(`Clicked on ${item.title}`)}
      >
        <Text style={styles.itemButtonText}>View Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={itemList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={() => (
          <>
            <View style={styles.chartContainer}>
              <NPieChart data={pieChartData} />
            </View>
            <View style={styles.cardsContainer}>
              <NCard
                title="Beautiful Landscape"
                description="Explore the beautiful landscapes with us."
                imageUrl="https://via.placeholder.com/300"
                onPress={handlePress}
              />
              <NCard
                title="Mountain Adventure"
                description="Join us for an unforgettable mountain adventure."
                imageUrl="https://via.placeholder.com/300"
                onPress={handlePress}
              />
              <NCard
                title="Ocean View"
                description="Experience the serene ocean view."
                imageUrl="https://via.placeholder.com/300"
                onPress={handlePress}
              />
            </View>
            <Text style={styles.listTitle}>Item List</Text>
          </>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  chartContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24,
  },
  cardsContainer: {
    width: '100%',
    marginBottom: 24,
  },
  listTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 8,
  },
  itemButton: {
    marginTop: 8,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  itemButtonText: {
    color: '#fff',
    fontSize: 14,
  },
});

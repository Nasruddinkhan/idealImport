

import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView, Dimensions } from 'react-native';

const categories = [
  { id: '1', title: 'Electronics', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcHW46m8It2wf1v24m4YI7OynT9ooKfT7qaA&s' },
  { id: '2', title: 'Clothing', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyAKmJibsLXQ8IqSEHU7a5L5QeoYasaJQ-Dg&s' },
  { id: '3', title: 'Home', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlT9X_fWp0UIAoYWi9_t1MuXjVotZJc9CPMg&s' },
  { id: '4', title: 'Books', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFMTieAZG6j6TrZaLR7VFldleuVUo_EKEVQ&s' },
];

const featuredItems = [
  { id: '1', title: 'Laptop', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBZ_BgLugqaaPHafV9nMeYLG4fuS2U3dJnQ&s' },
  { id: '2', title: 'Smart Phone', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoRwmTKFhvtocNtsWtoMpp7lyhM4cvpxndBA&s' },
  { id: '3', title: 'Headphones', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ78BWnTptc4yRSV9Va0DinWgLfbySnRcR2dQ&s' },
];

const { width } = Dimensions.get('window');
const  MenuScreen = () => {
  const renderCategory = ({ item }: { item: { id: string; title: string; imageUrl: string } }) => (
    <TouchableOpacity style={styles.categoryContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderFeaturedItem = ({ item }: { item: { id: string; title: string; imageUrl: string } }) => (
    <View style={styles.featuredItemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.featuredItemImage} />
      <Text style={styles.featuredItemTitle}>{item.title}</Text>
    </View>
  );

    return (
        <ScrollView style={styles.container}>
      {/* Categories Section */}
      <View style={styles.categoriesSection}>
        <Text style={styles.sectionTitle}>Categories</Text>
        <FlatList
          data={categories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      <View style={styles.featuredItemsSection}>
        <Text style={styles.sectionTitle}>Featured Items</Text>
        <FlatList
          data={featuredItems}
          renderItem={renderFeaturedItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featuredItemsList}
        />
      </View>
    </ScrollView>
      );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop:20
  },
  categoriesSection: {
    marginVertical: 10,
  },
  featuredItemsSection: {
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  categoriesList: {
    paddingVertical: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginHorizontal: 10,
    width: 100,
  },
  categoryImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  categoryTitle: {
    marginTop: 5,
    fontSize: 14,
    textAlign: 'center',
  },
  featuredItemsList: {
    paddingVertical: 10,
  },
  featuredItemContainer: {
    marginHorizontal: 10,
    alignItems: 'center',
    width: 150,
  },
  featuredItemImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  featuredItemTitle: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default MenuScreen;

import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, FlatList, Image, TouchableOpacity, Button } from 'react-native';
import { useHttp } from '../../hook'; // Assuming useHttp handles data fetching
import { ForwordRightIcon } from './../../assets/icons';

interface UserData {
  id: number;
  name: string;
  email: string;
  username: string;
}

const ProfileScreen = () => {
  const [page, setPage] = useState(1); // Track current page
  const [userData, setUserData] = useState<UserData[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const { data, loading, error } = useHttp<UserData[]>(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=10`);

  useEffect(() => {
    if (data) {
      setUserData((prevData) => [...prevData, ...data]); // Append new data to existing data
    }
  }, [data]);

  const loadMore = () => {
    setLoadingMore(true);
    setPage((prevPage) => prevPage + 1); // Increment page number
  };

  if (loading && !data) {
    return <ActivityIndicator style={styles.centered} size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.centered}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: UserData }) => (
    <TouchableOpacity style={styles.tableRow} onPress={() => handleDetails(item)}>
      <Image
        style={styles.avatar}
        source={{ uri: `https://i.pravatar.cc/150?u=${item.id}` }} // Example avatar URL
      />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userSubtitle}>{item.username}</Text>
        <Text style={styles.userEmail}>{item.email}</Text>
      </View>
      <ForwordRightIcon
        width={24} // Custom width
        height={24} // Custom height
        strokeWidth={3} // Custom stroke width
      />
    </TouchableOpacity>
  );

  const handleDetails = (item: UserData) => {
    // Logic to navigate to detail screen or display details
    console.log('Details for:', item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.table}>
        <View style={styles.tableHeader}>
          <Text style={styles.tableHeaderCell}>Profile</Text>
        </View>
        <FlatList
          data={userData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          ListFooterComponent={
            <View style={styles.loadMoreContainer}>
              {loadingMore && <ActivityIndicator size="small" color="#0000ff" />}
              <Button title="Load More" onPress={loadMore} disabled={loadingMore} />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 20,
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
  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    // borderRadius: 8,
    overflow: 'hidden',
  },
  listContainer: {
    paddingBottom: 16,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#e0e0e0',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
  },
  tableHeaderCell: {
    flex: 1,
    paddingVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRightWidth: 1,
    borderColor: '#ccc',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userSubtitle: {
    fontSize: 14,
    color: '#555',
  },
  userEmail: {
    fontSize: 14,
    color: '#555',
  },
  loadMoreContainer: {
    padding: 16,
    alignItems: 'center',
  },
});

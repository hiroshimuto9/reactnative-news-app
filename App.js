import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: 'https://picsum.photos/seed/picsum/200/300' }}
          />
        </View>
        <View style={styles.rigthtContainer}>
          <Text numberOfLines={3} style={styles.text}>
            The API will return 30 items per page by default.
            To request another page, use the ?page parameter.
            To change the amount of items per page, use the ?limit parameter.
          </Text>
          <Text style={styles.subText}>
            React News
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row'
  },
  leftContainer: {
    backgroundColor: 'red',
    width: 100
  },
  rigthtContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between'
  },
  text: {
    fontSize: 16
  },
  subText: {
    fontSize: 12,
    color: 'gray'
  }
});

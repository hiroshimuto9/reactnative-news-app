import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListItem from './components/ListItem'

export default function App() {
  return (
    <View style={styles.container}>
      <ListItem
        imageUrl="https://picsum.photos/seed/picsum/200/300" 
        title="The API will return 30 items per page by default.
        To request another page, use the ?page parameter.
        To change the amount of items per page, use the ?limit parameter."
        author="sample news"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

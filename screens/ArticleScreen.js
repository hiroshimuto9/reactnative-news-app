import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

export default ArticleScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Article Screenです</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

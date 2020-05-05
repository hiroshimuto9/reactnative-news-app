import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default ClipScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Clip</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import ListItem from '../components/ListItem'
import { useSelector } from 'react-redux'

export default ClipScreen = ({navigation}) => {
  const user = useSelector(state => state.user);
  const {clips} = user;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={clips}
        renderItem={({item}) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={()=> navigation.navigate("ArticleScreen", {article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

import React from 'react';
import { StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch } from 'react-redux';
import { addClip, deleteClip } from '../store/actions/user'

export default ArticleScreen = ({route}) => {
  const {article} = route.params;
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => {dispatch(addClip({clip: article}))}}>
        <Text style={styles.btn}>ADD_CLIP</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {dispatch(deleteClip({clip: article}))}}>
        <Text style={styles.btn}>DELET_CLIP</Text>
      </TouchableOpacity>
      <WebView source={{uri: article.url}} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  btn: {
    margin: 10,
    fontSize: 30
  }
});

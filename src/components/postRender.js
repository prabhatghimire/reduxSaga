import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import * as RootNavigation from '../RootNavigation';

export const PostsRender = ({item}) => {
  return (
    <View style={styles.postRenderContainer}>
      <TouchableOpacity
        onPress={() => RootNavigation.navigate('Post', { itemId : item.id })}>
        <View>
          <Image source={{uri: item.imageUrl}} style={styles.imageStyle} />
          <View>
            <Text style={styles.itemTitleStyle}>{item.title}</Text>
            <Text>{item.content}</Text>
            <View style={styles.itemhitsStyle}>
              <Text>{item.hits}</Text>
              <Text style={styles.likesStyle}>{item.likes}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  postRenderContainer : {flex: 1},
  imageStyle: {width: 50, height: 50},
  likesStyle: {
    backgroundColor: 'skyblue',
    width: 50,
    borderRadius: 20,
    textAlign: 'center',
  },
  itemTitleStyle: {fontSize: 20, textAlign: 'center'},
  itemhitsStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
  },
});

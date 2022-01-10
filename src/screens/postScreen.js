import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {getPostDetails} from '../store/actions/postsAction';
import {useDispatch} from 'react-redux';
import {LoadingScreen} from './loadingScreen';

export const PostScreen = ({route, navigation}) => {
  const {post, loadingPostDetails} = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const {itemId} = route.params;

  useEffect(() => {
    dispatch(getPostDetails(itemId));
  }, [itemId]);

  return (
    <View style={{flex:1, backgroundColor : 'white'}}>
      {loadingPostDetails ? (
        <LoadingScreen />
      ) : (
        <>
          <Image
            source={{uri: post.imageUrl}}
            style={{width: 100, height: 100}}
          />
          <View>
            <Text style={{fontSize: 20, textAlign: 'center'}}>
              {post.title}
            </Text>
            <Text>{post.content}</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 30,
              }}>
              <Text>{post.hits}</Text>
              <Text
                style={{
                  backgroundColor: 'skyblue',
                  width: 50,
                  borderRadius: 20,
                  textAlign: 'center',
                }}>
                {post.likes}
              </Text>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {getPostDetails} from '../../store/actions/postsAction';
import {useDispatch} from 'react-redux';
import {LoadingScreen} from '../loadingScreen';
import { PostsRender } from '../../components/postRender';
import { styles } from './style';

export const PostScreen = ({route, navigation}) => {
  const {post, isLoading} = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const {itemId} = route.params;

  useEffect(() => {
    dispatch(getPostDetails(itemId));
  }, []);

  return (
    <View style={styles.postContainer}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          {/* <PostsRender item={post}/> */}<Text>hello</Text>
        </>
      )}
    </View>
  );
};

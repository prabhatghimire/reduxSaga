import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import {useSelector} from 'react-redux';
import {getPostDetails} from '../../store/actions/postsAction';
import {useDispatch} from 'react-redux';
import {LoadingScreen} from '../loadingScreen';
import { PostsRender } from '../../components/postRender';
import { styles } from './style';

export const PostScreen = ({route, navigation}) => {
  const {post, loadingPostDetails} = useSelector(state => state.posts);
  const dispatch = useDispatch();
  const {itemId} = route.params;

  useEffect(() => {
    dispatch(getPostDetails(itemId));
  }, [itemId]);

  return (
    <View style={styles.postContainer}>
      {loadingPostDetails ? (
        <LoadingScreen />
      ) : (
        <>
          <PostsRender item={post}/>
        </>
      )}
    </View>
  );
};

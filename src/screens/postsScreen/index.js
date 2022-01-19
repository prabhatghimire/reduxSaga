import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../../store/actions/postsAction';
import {LoadingScreen} from '../loadingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './style';
import {PostsRender} from '../../components/postRender';
import { SearchBar } from '../../components/searchBar';

export const PostsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const {posts} = useSelector(state => state.posts);
  const {user} = useSelector(state => state.user);

  return (
    <View style={styles.postsContainer}>
      <View style={styles.headerContainer}>
        <Text>Hello, {user?.email} </Text>
        <TouchableOpacity onPress={()=> console.log('search')}>
        <Text style={styles.SearchBarStyle}>
          <Icon name="search" size={18} />
        </Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 30}}>{`Let's create a\n perfect Moment`}</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={posts}
          renderItem={PostsRender}
          keyExtractor={item => item.id}
          ListEmptyComponent={LoadingScreen}
        />
      </View>
    </View>
  );
};

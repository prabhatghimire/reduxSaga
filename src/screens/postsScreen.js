import React, {useEffect} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../store/actions/postsAction';
import {LoadingScreen} from './loadingScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

export const PostsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const {posts, loadingPosts} = useSelector(state => state.posts);
  const {user} = useSelector(state => state.user);

  const postsRender = ({item}) => {
    return (
      <View style={{flex:1}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Post', {itemId: item.id})}>
          <View>
            <Image
              source={{uri: item.imageUrl}}
              style={{width: 50, height: 50}}
            />
            <View>
              <Text style={{fontSize: 20, textAlign: 'center'}}>
                {item.title}
              </Text>
              <Text>{item.content}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 30,
                }}>
                <Text>{item.hits}</Text>
                <Text
                  style={{
                    backgroundColor: 'skyblue',
                    width: 50,
                    borderRadius: 20,
                    textAlign: 'center',
                  }}>
                  {item.likes}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>Hello, {user?.email} </Text>
        <Text style={{marginRight: 20}}>
          <Icon name="search" size={18} />
        </Text>
      </View>
      <Text style={{fontSize: 30}}>{`Let's create a\n perfect Moment`}</Text>
      <View>
        <FlatList
          data={posts}
          renderItem={postsRender}
          keyExtractor={item => item.id}
          ListEmptyComponent={LoadingScreen}
        />
      </View>
    </View>
  );
};

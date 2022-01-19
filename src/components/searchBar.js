import React, {useState} from 'react';
import {Text, View} from 'react-native';


export const SearchBar = () => {
  const [modalVisible, setmodalVisible] = useState(true);

  return (
    <View>
     <Text>Search</Text>
    </View>
  );
};


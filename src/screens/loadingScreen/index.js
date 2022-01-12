import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { styles } from './style';

export const LoadingScreen = () => {
  return (
    <View style={styles.LoadingContainer}>
      <Text style={styles.LoadingContent}>Loading...</Text>
    </View>
  );
};
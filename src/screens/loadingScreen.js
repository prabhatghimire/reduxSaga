import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const LoadingScreen = () => {
  return (
    <View style={styles.LoadingContainer}>
      <Text style={styles.LoadingContent}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  LoadingContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
  },
});

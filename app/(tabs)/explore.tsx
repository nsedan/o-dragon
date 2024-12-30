import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import colors from '../colors';

const Explore = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: colors.grey, padding: 16 }}>
      <Button onPress={() => console.log('hi')}>
        <Text>Explore</Text>
      </Button>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});

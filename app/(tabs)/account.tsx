import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Button from '../components/Button';
import colors from '../colors';

const Account = () => {
  return (
    <View style={{ flexGrow: 1, backgroundColor: colors.grey, padding: 16 }}>
      <Button onPress={() => console.log('hi')}>
        <Text>Coming soon...</Text>
      </Button>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

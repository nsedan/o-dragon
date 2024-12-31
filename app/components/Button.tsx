import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const Button = ({
  onPress,
  children
}: {
  onPress: () => void;
  children: React.ReactNode;
}) => <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>;

export default Button;

const styles = StyleSheet.create({});

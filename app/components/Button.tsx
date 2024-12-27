import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

interface ButtonProps {
  onPress: () => void;
  children: React.ReactNode;
}

const Button = ({ onPress, children }: ButtonProps) => (
  <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
);

export default Button;

const styles = StyleSheet.create({});

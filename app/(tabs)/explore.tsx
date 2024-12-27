import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";

const Explore = () => {
  return (
    <View>
      <Button onPress={() => console.log("hi")}>
        <Text>Explore</Text>
      </Button>
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});

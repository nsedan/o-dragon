import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Button from "../components/Button";

const Account = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Button onPress={() => console.log("hi")}>
        <Text>Account</Text>
      </Button>
    </View>
  );
};

export default Account;

const styles = StyleSheet.create({});

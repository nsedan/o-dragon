import React from "react";
import { Text, View } from "react-native";
import Button from "../components/Button";

const Home = () => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Button onPress={() => console.log("hi")}>
        <Text>Home</Text>
      </Button>
    </View>
  );
};

export default Home;

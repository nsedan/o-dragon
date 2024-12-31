import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import colors from '../utils/colors';
import { Drink } from '../utils/customTypes';

const { white, black, primary } = colors;

const Explore = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [isLoading, setLoading] = useState(false);
  const scrollViewRef = useRef<ScrollView | null>(null);

  const fetchDrinks = async (value: string) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`
      );
      const json = await response.json();
      console.log(json);
      setDrinks(json.drinks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: 0, animated: true });
    }
  }, [drinks]);

  return (
    <SafeAreaView style={{ marginVertical: 16 }}>
      <TextInput
        style={styles.searchbar}
        onChangeText={(v) => setSearchTerm(v)}
        placeholder="Search"
        returnKeyType="search"
        onSubmitEditing={() => fetchDrinks(searchTerm)}
        autoFocus
        autoCapitalize="none"
      />
      {isLoading && <ActivityIndicator style={{ marginTop: 16 }} />}
      {!isLoading && drinks?.length > 0 ? (
        <ScrollView
          ref={scrollViewRef}
          style={{ marginTop: 16 }}
          contentContainerStyle={{ paddingBottom: 32 }}
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          {drinks.map((drink) => (
            <TouchableOpacity
              key={drink.idDrink}
              style={styles.row}
              onPress={() => console.log(drink)}
            >
              <Image
                source={{ uri: drink.strDrinkThumb }}
                style={styles.image}
              />
              <View style={{ flexGrow: 1, justifyContent: 'center' }}>
                <Text style={styles.drinkName}>{drink.strDrink}</Text>
                <Text style={styles.category}>
                  {drink.strIBA || drink.strCategory}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      ) : (
        <Text style={styles.noResults}>Nothing to show...</Text>
      )}
    </SafeAreaView>
  );
};

export default Explore;

const styles = StyleSheet.create({
  searchbar: {
    borderColor: black,
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: primary,
    borderRadius: 8,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: black,
    shadowOpacity: 0.5,
    shadowRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 8,
    borderColor: white,
    borderWidth: 1,
    marginRight: 16
  },
  drinkName: {
    color: white,
    fontWeight: 700,
    fontSize: 16,
    lineHeight: 20
  },
  category: {
    color: white,
    paddingTop: 4,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 16
  },
  noResults: {
    padding: 16,
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 16
  }
});

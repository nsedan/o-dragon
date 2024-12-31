import React, { useEffect, useState } from 'react';
import {
  Image,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import colors from '../utils/colors';
import { Drink } from '../utils/customTypes';

const { white, black, primary } = colors;

const Home = () => {
  const [drink, setDrink] = useState<Drink | null>(null);
  const [isLoading, setLoading] = useState(true);

  const fetchDrink = async () => {
    try {
      const response = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php'
      );
      const json = await response.json();
      setDrink(json.drinks[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDrink();
  }, []);

  if (!drink || isLoading) {
    return null;
  }

  const ingredients = Array.from({ length: 15 }, (_, i) => {
    const item = i + 1;
    const qty = drink[`strMeasure${item}`];
    const ing = drink[`strIngredient${item}`];
    return qty && ing ? `${qty} ${ing}` : null;
  }).filter((f) => f);

  return (
    <ScrollView
      style={{ paddingHorizontal: 32 }}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={fetchDrink} />
      }
    >
      <TouchableOpacity style={styles.tile} onPress={() => console.log('hi')}>
        <Image source={{ uri: drink.strDrinkThumb }} style={styles.image} />
        <Text style={styles.drinkName}>{drink.strDrink}</Text>
        <Text style={styles.ingredients}>Ingredients</Text>
        {ingredients.map((ingredient) => (
          <Text key={ingredient} style={styles.item}>
            {ingredient}
          </Text>
        ))}
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  tile: {
    backgroundColor: primary,
    borderRadius: 8,
    padding: 16,
    marginVertical: 16,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: black,
    shadowOpacity: 0.5,
    shadowRadius: 8
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    maxHeight: 300,
    alignSelf: 'center',
    borderRadius: 8,
    borderColor: white,
    borderWidth: 1
  },
  drinkName: {
    color: white,
    paddingTop: 12,
    fontWeight: 700,
    fontSize: 24,
    lineHeight: 32
  },
  ingredients: {
    color: white,
    paddingTop: 8,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 24
  },
  item: {
    color: white,
    paddingTop: 4,
    fontWeight: 600,
    fontSize: 12,
    lineHeight: 16
  }
});

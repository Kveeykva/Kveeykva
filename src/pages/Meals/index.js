import { Text, FlatList, ActivityIndicator } from 'react-native';
import React from 'react';
import useFetch from '../../hooks/useFetch';
import ENV from '../../../env';
import MealCard from '../../components/cards/MealCard';

const Meals = ({ route, navigation }) => {
    const { strCategory } = route.params;

    const { data, error, loading } = useFetch(`${ENV.API_MEALS}${strCategory}`);

    const renderMeals = ({ item }) => (
        <MealCard meal={item} onSelect={() => handleMealSelect(item.idMeal)} />
    );

    const handleMealSelect = idMeal => {
        navigation.navigate('DetailPage', { idMeal });
    };

    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }

    return <FlatList data={data.meals} renderItem={renderMeals} />;
};

export default Meals;
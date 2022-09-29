import React, { useState, useEffect } from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";
import useFetch from "../../hooks/useFetch";
import ENV from "../../../env"
import CategorieCard from "../../components/cards/CategoriesCard";


const Categories = ({ navigation }) => {
    const { data, loading, error } = useFetch(ENV.API_CATEGORIES);

    const renderCategories = ({ item }) => (
        <CategorieCard
            category={item}
            onSelect={() => handleCategorySelect(item.strCategory)}
        />
    )
    const handleCategorySelect = strCategory => {
        navigation.navigate('MealsPage', { strCategory });
    };
    if (loading) {
        return <ActivityIndicator size="large" />;
    }

    if (error) {
        return <Text>{error}</Text>;
    }
    return <FlatList data={data.categories} renderItem={renderCategories} />;



};
export default Categories;

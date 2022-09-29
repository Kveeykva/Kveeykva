import {
    View,
    Text,
    ImageBackground,
    TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import styles from './styles';

const MealCard = ({ meal, onSelect }) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <ImageBackground style={styles.image} source={{ uri: meal.strMealThumb }}>
                    <View style={styles.inner_container}>
                        <View style={styles.info_container}>
                            <Text style={styles.title}>{meal.strMeal}</Text>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MealCard;
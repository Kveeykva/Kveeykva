import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../pages/Categories";
import Meals from "../pages/Meals";
import Detail from "../pages/Detail";

const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="CategoriesPage"
                    component={Categories}
                    options={{
                        title: "Categories",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: 'orange' },
                    }}
                />
                <Stack.Screen
                    name="MealsPage"
                    component={Meals}
                    options={{
                        title: "Meals",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: 'orange' },


                    }}
                />
                <Stack.Screen
                    name="DetailPage"
                    component={Detail}
                    options={{
                        title: "Details",
                        headerTitleAlign: "center",
                        headerTitleStyle: { color: 'orange' },
                    }}


                />


            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;

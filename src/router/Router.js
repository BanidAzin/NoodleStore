import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import { LoadingScreen } from "../screens/LoadingScreen";
import { HomeScreen } from "../screens/HomeScreen";

const Stack = createStackNavigator();

export const Router = () => {
    const [isAppLoading, setAppLoading] = useState(true);

    useEffect(() => {
        const showAppLoadingScreen = async () => {
            setTimeout(() => {
                setAppLoading(false);
            }, 2000);
        };

        showAppLoadingScreen();
    }, []);

    return (isAppLoading ? (
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Loading" component={LoadingScreen} />
        </Stack.Navigator>
    ) : (
        <Stack.Navigator>
          <Stack.Screen options={{title: 'Noodles Stores'}} name="Loading" component={HomeScreen} />
        </Stack.Navigator>
    ));
};
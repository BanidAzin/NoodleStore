import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";

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
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Loading Screen</Text>
        </View>
    ) : (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
        </View>
    ));
};
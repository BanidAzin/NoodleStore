import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "../components/Card";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Card />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
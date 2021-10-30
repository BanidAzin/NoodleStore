import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "../components/Card";
import { ShimmerView } from "../components/Shimmer";

export const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);

    return isLoading ? (
        <ScrollView
            scrollEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}>
            <ShimmerView number={4}/>
        </ScrollView>
    ) : (
        <View style={styles.container}>
            <Card />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainerStyle: {
        flex: 1,
        paddingVertical: '3%',
    },
});
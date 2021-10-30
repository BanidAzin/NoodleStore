import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import NoodleBowlImage from "../assets/noodle.jpg";

export const LoadingScreen = () => {
    return (
        <ImageBackground
            source={NoodleBowlImage}
            style={styles.container}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
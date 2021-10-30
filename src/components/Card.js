import React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";
import Icon from "react-native-vector-icons/Feather";

import { useDimensions } from "../helpers";

export const Card = props => {
    const {window} = useDimensions();

    const {height, width} = window;

    return (
        <View style={[styles.container, {
            minHeight: height * 0.3,
            width: width * 0.95,
            borderRadius: height * 0.02,
        }]}>
            <ImageBackground 
                source={{uri: 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexee3e8a8.jpeg'}}
                borderTopLeftRadius={height * 0.02}
                borderTopRightRadius={height * 0.02}
                style={{
                    minHeight: height * 0.3,
                    width: width * 0.95,
                }}
            >
                <View 
                    style={[styles.ratingContainer, {
                        height: height * 0.04,
                        width: width * 0.2,
                        borderRadius: height * 0.05,
                    }]}
                >
                    <Icon name="star" size={height * 0.02}/>
                    <Text style={[styles.text, {paddingLeft: 3}]}>
                        3.5
                    </Text>
                </View>
                <View style={styles.topTen}>
                    <Text style={styles.text}>
                        2016 #1
                    </Text>
                </View>
            </ImageBackground>

            <View style={styles.detailsContainer}>
                <View style={styles.detailsItem}>
                    <Text style={styles.text}>
                        Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack ("Pack")
                    </Text>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={styles.subText}>
                        Sapporo Ichiban
                    </Text>
                </View>
                <View style={[styles.detailsItem, {flexDirection: 'row'}]}>
                    <Icon name="flag" size={height * 0.02} color="grey" />
                    <Text style={styles.subText}>
                        Singapore
                    </Text>
                </View>
                <View style={styles.detailsItem}>
                    <Text style={styles.subText}>
                        2016 #1
                    </Text>
                </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'center',
        margin: 20,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 1,
        shadowRadius: 8,
        elevation: 8,
    },
    ratingContainer: {
        position: 'absolute',
        top: 10,
        right: 15,
        backgroundColor: 'white',
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        fontWeight: '500',
    },
    topTen: {
        position: 'absolute',
        bottom: 10,
        left: 10,
        backgroundColor: 'white',
        padding: 7,
        borderRadius: 5,
    },
    detailsContainer: {
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    detailsItem: {
        marginVertical: 2.5,
    },
    subText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'grey',
        paddingLeft: 3,
    },
});
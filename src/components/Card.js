import React from "react";
import {View, Text, StyleSheet, ImageBackground} from "react-native";

import { useDimensions } from "../helpers";

export const Card = props => {
    const {window} = useDimensions();

    const {height, width} = window;

    return (
        <View style={[styles.container, {
            minHeight: height * 0.3,
            width: width * 0.95,
            borderRadius: height * 0.02,
            alignSelf: 'center',
            margin: 20,
            backgroundColor: 'white',
            shadowColor: 'black',
            shadowOffset: {width: 0, height: 0},
            shadowOpacity: 1,
            shadowRadius: 8,
            elevation: 8,
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
                <View style={{position: 'absolute', top: 10, right: 15, backgroundColor: 'white', padding: 7, height: height * 0.04, width: width * 0.2, borderRadius: height * 0.05, alignItems: 'center', justifyContent: 'center'}}>
                    <Text style={{fontSize: 18, fontWeight: '500', color: 'grey'}}>
                        * 3.5
                    </Text>
                </View>
                <View style={{position: 'absolute', bottom: 10, left: 10, backgroundColor: 'white', padding: 7, borderRadius: 5}}>
                    <Text style={{fontSize: 18, fontWeight: '500', color: 'grey'}}>
                        2016 #1
                    </Text>
                </View>
            </ImageBackground>
            <View style={{marginVertical: 10, paddingHorizontal: 10}}>
                <View style={{marginVertical: 2.5}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>
                        Oriental Style Instant Noodles Green Curry Flavour Jumbo Pack ("Pack")
                    </Text>
                </View>
                <View style={{marginVertical: 2.5}}>
                    <Text style={{fontSize: 18, fontWeight: '500', color: 'grey'}}>
                        Sapporo Ichiban
                    </Text>
                </View>
                <View style={{marginVertical: 2.5}}>
                    <Text style={{fontSize: 18, fontWeight: '500', color: 'grey'}}>
                        Singapore
                    </Text>
                </View>
                <View style={{marginVertical: 2.5}}>
                    <Text style={{fontSize: 18, fontWeight: '500', color: 'grey'}}>
                        2016 #1
                    </Text>
                </View>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});
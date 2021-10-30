import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "../components/Card";
import { ShimmerView } from "../components/Shimmer";
import { fetchData, STORE_URL } from "../helpers";

export const HomeScreen = () => {
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [stores, setStores] = useState([]);
    const [refreshing, setRefreshing] = useState(false)

    const insets = useSafeAreaInsets();

    useEffect(() => {
        fetchStores()
    }, []);

    const fetchStores = () => {
        fetchData({url: STORE_URL, method: 'GET'})
        .then(res => {
            setStores(res);
        })
        .catch(({errors, appStatus}) => {
        if (appStatus === 'Maintenance') setError('App is in Maintenance mode');
        if (appStatus === 'Unauthenticated') {
            setError('You are not authenticated, Please Login!');
        } else setError(errors.message ?? DEFAULT_ERROR_MESSAGE);
      })
      .finally(() => {
        setLoading(false);
        setRefreshing(false);
      });
    };

    const onStoresRefresh = () => {
        setRefreshing(true);
        fetchStores();
    };

    return isLoading ? (
        <ScrollView
            scrollEnabled
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerStyle}>
            <ShimmerView number={4}/>
        </ScrollView>
    ) : (
        <FlatList
            keyboardShouldPersistTaps="handled"
            data={stores}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => <Card store={item} />}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{bottom: insets.bottom, paddingTop: insets.top}}
            refreshControl={
              <RefreshControl
                tintColor='red'
                refreshing={refreshing}
                onRefresh={onStoresRefresh}
              />
            }
        />
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
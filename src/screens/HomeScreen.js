import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, RefreshControl } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FlatList } from "react-native-gesture-handler";
import { Card } from "../components/Card";
import { ShimmerView } from "../components/Shimmer";
import { fetchData, STORE_URL } from "../helpers";

const storeImages = [
   {
      "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/indexee3e8a8.jpeg"
   },
   {
      "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/images135ea53.jpeg"
   },
   {
      "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/garlic-noodles-61-700x6802c7f765.jpeg"
   },
   {
      "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/Hakka-Noodles-2-34755e38.jpeg"
   },
   {
      "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/1200px-Mama_instant_noodle_block625f483.jpeg"
   },
   {
      "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/20190530-ramen-noodles-vicky-wasik-76-1500x11257be7d5b.jpeg"
   },
   {
      "Image":"https://s3-ap-southeast-1.amazonaws.com/he-public-data/200702_Hand-Pulled-Noodles_55099856b5.jpeg"
   }
];

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
            let responseWithRandomImage = res.map(store => {
                return {
                    ...store,
                    imageUrl: storeImages[Math.floor(Math.random() * storeImages.length)].Image
                }
            }); 
            setStores(responseWithRandomImage);
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

    const renderCardItem = ({item}) => {
        return <Card store={item}/>;
    }

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
            renderItem={renderCardItem}
            removeClippedSubviews={false}
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
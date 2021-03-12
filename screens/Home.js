import React, { useLayoutEffect } from 'react'
import { SafeAreaView } from 'react-native'
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/items/CustomListItem'
import { auth, db } from '../firebase';

const Home = ({ navigation }) => {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "My App",
            headerStyle: { backgroundColor: "#0077B5" },
            headerTitleStyle: { color: "black" },
            headerTintColor: "black",
            headerLeft: () => <View style={{ marginLeft: 20 }}>
                <TouchableOpacity activeOpacity={0.5}>
                    <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                </TouchableOpacity>
            </View>
        });
    }, []);


    return (
        <SafeAreaView>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({})

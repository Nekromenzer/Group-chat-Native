import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import CustomListItem from '../components/items/CustomListItem'

const Home = () => {
    return (
        <View>
            <ScrollView>
                <CustomListItem />
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({})

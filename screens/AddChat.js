import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Input, Button } from "react-native-elements"
import { AntDesign } from '@expo/vector-icons';
import { db } from '../firebase';


const AddChat = ({ navigation }) => {
    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Add a new Chat",
            headerBackTitle: "Chats"
        });
    }, [navigation]);

    const createChat = async () => {
        await db.collection('chat').add({
            chatName: input,
        })
            .then(() => {
                navigation.goBack();
            })
            .catch((error) => alert(error));
    };

    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter a chat name"
                onSubmitEditing={createChat}
                value={input}
                onChangeText={(text) => setInput(text)}
                leftIcon={
                    <AntDesign name="wechat" size={24} color="#dbdbdb" />
                }
            />
            <Button onPress={createChat} title="Create New Chat" />
        </View>
    )
}

export default AddChat

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop:50,
        padding: 30,
        height: "100%"
    }
})

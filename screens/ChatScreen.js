import React, { useLayoutEffect, useState } from 'react'
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Platform, KeyboardAvoidingView, StatusBar } from 'react-native'
import { Avatar } from 'react-native-elements'
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const ChatScreen = ({ navigation, route }) => {

    const [input, setInput] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Chat",
            headerBackTitleVisible: false,
            headerTitlealign: "left",
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <Avatar

                        rounded source={{
                            uri: "https://www.facebook.com/photo?fbid=2995756637325500&set=a.1391312221103291"
                        }} />
                    <Text
                        style={{ color: "white", marginLeft: 10, fontWeight: "600" }}
                    >{route.params.chatName}</Text>
                </View>
            ),
            headerLeft: () => (
                <TouchableOpacity
                    style={{ marginLeft: 10 }}
                    onPress={navigation.goBack}
                >
                    <AntDesign name="arrowleft" size={24} color="white" />
                </TouchableOpacity>
            ), headerRight: () => (
                <View style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 70,
                    marginRight: 10
                }}>
                    <TouchableOpacity>
                        <FontAwesome name="video-camera" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="call" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            )

        });
    }, [navigation])

    const sendMsg = () => {

    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar style="light" />
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
                keyboardVerticalOffset={90}
            >
                <>
                    <ScrollView>
                        {/* chats goes here */}
                    </ScrollView>
                    <View style={styles.footer}>
                        <TextInput
                            value={input}
                            onChangeText={(text) => setInput(text)}
                            placeholder="signal massges"
                            style={styles.textInput}
                        />
                        <TouchableOpacity activeOpacity={0.5} onPress={sendMsg}>
                            <Ionicons name="send" size={24} color="#385fc9" />
                        </TouchableOpacity>
                    </View>
                </>
            </KeyboardAvoidingView>
            {/* <Text>{route.params.chatName}</Text> */}
        </SafeAreaView>
    )
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    footer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        padding: 15
    },
    textInput: {
        bottom: 0,
        height: 40,
        flex: 1,
        marginRight: 15,
        borderColor: "transparent",
        backgroundColor: "#ECECEC",
        padding: 10,
        color: "grey",
        borderRadius: 30,
    }
})

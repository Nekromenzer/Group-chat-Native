import React, { useState, useEffect } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { View, StyleSheet } from 'react-native'
import { Button, Image, Input } from 'react-native-elements'
import { auth } from '../firebase'

const loginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                navigation.replace("Home");
            }
        });
        return unsubscribe;
    }, [])

    const signIn = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .catch((error) => alert(error));
    }

    const register = () => {
        navigation.navigate("Register");
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require("../components/logo/logo.png")}
                style={styles.logo}
            />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Email"
                    autofocus
                    type="email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <Input
                    placeholder="Password"
                    secureTextEntry
                    type="password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    onSubmitEditing={signIn}
                />
            </View>

            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={register} title="Register" type="outline" />
            <View style={{ height: 150 }} />

        </KeyboardAvoidingView>
    )
}

export default loginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 40
    },
    inputContainer: {
        width: 300,
        marginBottom: 10
    },
    button: {
        width: 200,
        marginTop: 10,
    }
});

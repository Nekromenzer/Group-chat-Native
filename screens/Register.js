import React, { useState, useLayoutEffect } from 'react'
import { View, StyleSheet } from 'react-native'
import { KeyboardAvoidingView } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar'
import { auth } from '../firebase'

const Register = ({ navigation }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: "Login"
        })
    }, [navigation])

    const registerUser = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(authUser => {
                authUser.user.updateEmail({
                    displayName: name,
                    photoURL: imageUrl || "https://icotar.com/avatar/wcy3825im6a5oibn.png?s=40"
                })
            })
            .catch((error) => alert(error.message));
    };
    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Text h3 style={{ marginBottom: 50 }}>Create Account</Text>
            <StatusBar style="light" />
            <View style={styles.inputContainer}>
                <Input
                    placeholder="Full Name"
                    autofocus
                    type="text"
                    value={name}
                    onChange={text => setName(text)}
                />
                <Input
                    placeholder="Email"
                    type="email"
                    value={email}
                    onChange={email => setEmail(email)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    secureTextEntry
                    value={password}
                    onChange={text => setPassword(text)}
                />
                <Input
                    placeholder="Profile Picture Url"
                    type="text"
                    value={imageUrl}
                    onChange={text => setImageUrl(text)}
                    onSubmitEditing={registerUser}
                />
            </View>
            <Button
                containerStyle={styles.button}
                raised
                onPress={registerUser}
                title="Register"
            />
            <View style={{ height: 150 }} />
        </KeyboardAvoidingView>
    )
}

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white"
    },
    inputContainer: {
        width: 300,
        marginBottom: 10
    },
    button: {
        width: 200,
        marginTop: 10,
    }
})
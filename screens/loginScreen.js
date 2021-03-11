import React, { useState } from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { StatusBar } from 'react-native'
import { View, Text, StyleSheet } from 'react-native'
import { Button, Image, Input } from 'react-native-elements'

const loginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = () => {

    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light" />
            <Image
                source={require("../components/logo/logo.png")}
                style={{ width: 100, height: 100 }}
            />
            <View styele={styles.inputContainer}>
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
                />

                <Text>Iam the login screen dasd</Text>
            </View>
            <View>
                <Button containerStyle={styles.button} onPress={signIn} title="Login" />
                <Button containerStyle={styles.button} onPress={signIn} title="Register" type="outline" />
            </View>
        </KeyboardAvoidingView>
    )
}

export default loginScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    },
    inputContainer: {},
    button: {}
});

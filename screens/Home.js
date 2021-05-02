import React, { useEffect, useLayoutEffect, useState } from 'react'
import { StyleSheet, Alert, View, ScrollView, SafeAreaView, TouchableOpacity, Modal } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../components/items/CustomListItem'
import { auth, db } from '../firebase';
import { Entypo, AntDesign } from '@expo/vector-icons';


const Home = ({ navigation }) => {
    // const [modalVisible, setModalVisible] = useState(false);
    const [chats, setchats] = useState([]);

    const signOutuser = () => {
        auth.signOut().then(() => {
            navigation.replace("Login");
        });
    };

    useEffect(() => {
        const unsubscribe = db.collection("chats").onSnapshot((snapshot) =>
            setchats(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        );
        return unsubscribe;
    }, []);

    // const popUp = () => {
    //     Alert.alert(
    //         "Alert Title",
    //         "My Alert Msg",
    //         [
    //             {
    //                 text: "Cancel",
    //                 onPress: () => console.log("Cancel Pressed"),
    //                 style: "cancel"
    //             },
    //             { text: "OK", onPress: () => console.log("OK Pressed") }
    //         ]);
    // }

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Vibes",
            headerStyle: { backgroundColor: "#0077B5" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "black",
            headerLeft: () =>
            (
                <View style={{ marginLeft: 20 }}>
                    <TouchableOpacity activeOpacity={0.5} onPress={signOutuser}>
                        <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }} />
                    </TouchableOpacity>
                </View>
            ),
            headerRight: () => (

                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: 80,
                    marginRight: 20
                }}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.icon}>
                        <AntDesign name="camerao" size={24} color="#dbdbdb" />
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.icon}
                        onPress={() => navigation.navigate("AddChat")}
                    >

                        <Entypo name="new-message" size={24} color="#dbdbdb" />
                    </TouchableOpacity>
                    {/* <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.icon}
                        onPress={popUp}
                    >

                        <Entypo name="dots-three-vertical" size={24} color="#dbdbdb" />
                    </TouchableOpacity> */}
                </View>

            ),
        });
    }, [navigation]);


    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                {chats.map(({ id, data: { chatName } }) => (
                    <CustomListItem key={id} id={id} chatName={chatName} />
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        height: "100%"
    },
    icon: {
        paddingLeft: 5,
    }
})

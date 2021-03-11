import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = () => {
    return (
        <ListItem>
            <Avatar
                rounded
                source={{
                    uri: "https://icotar.com/avatar/wcy3825im6a5oibn.png?s=40"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "600" }}>
                    My chat app
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This i ssub title  of my app now ima creating  abdh ahgbydha dbvuya
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})

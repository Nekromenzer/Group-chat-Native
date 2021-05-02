import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
    return (
        <ListItem key={id} bottomDivider>
            <Avatar
                rounded
                source={{
                    uri: "https://icotar.com/avatar/wcy3825im6a5oibn.png?s=40"
                }}
            />
            <ListItem.Content>
                <ListItem.Title style={{ fontWeight: "600" }}>
                    {chatName} 
                </ListItem.Title>
                <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
                    This i ssub title  of my app now
                </ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>
    )
}

export default CustomListItem

const styles = StyleSheet.create({})

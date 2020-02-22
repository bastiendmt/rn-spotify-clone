import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class Playlist extends Component {

    render() {
        return (
            <TouchableOpacity style={styles.item}>
                <Text>This is a playlist</Text>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    item: {
        padding : 5,
        width: '50%',
        height: 50,
        // flex: 1,
        backgroundColor : '#0f0'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

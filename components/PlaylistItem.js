import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default class PlaylistItem extends Component {


    render() {
        const playlist = this.props.playlist;
        return (
            <TouchableOpacity style={styles.item}>
                <Text>{playlist.name}</Text>
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

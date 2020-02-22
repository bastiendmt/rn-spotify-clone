import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import Image from "react-native-web/dist/exports/Image";
import {ImageBackground} from "react-native-web";

export default class PlaylistItem extends Component {


    render() {
        const playlist = this.props.playlist;
        return (
            <TouchableOpacity style={styles.item}>
                <ImageBackground
                    source={playlist.images.url}
                >
                    <Text>{playlist.name}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    item: {
        padding: 5,
        width: '50%',
        height: 50,
        // flex: 1,
        backgroundColor: '#0f0'
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

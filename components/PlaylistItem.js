import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native'

export default class PlaylistItem extends Component {


    render() {
        const {playlist, displayPlaylist} = this.props
        return (
            <TouchableOpacity
                style={styles.item}
                onPress={() => displayPlaylist(playlist.id)}
            >
                <Image
                    source={{uri: playlist.images[0].url}}
                    style={styles.image}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: 150,
        height: 150,
        margin: 10
    },
    image: {
        width: '100%',
        height: '100%'
    }
});

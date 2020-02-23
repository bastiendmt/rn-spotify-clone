import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class SongItem extends Component {
    render() {
        const {song} = this.props;
        return (
            <TouchableOpacity
                style={styles.item}

            >
                {/*{song.track.preview_url != undefined}*/}
                <Text style={styles.title}>{song.track.name}</Text>
                <Text style={styles.artist}>{song.track.artists[0].name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        margin: 10
    },
    title: {},
    artist: {
        color: '#ccc'
    }
});

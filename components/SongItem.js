import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'

export default class SongItem extends Component {
    render() {
        const {song} = this.props;

        function playSound(songUrl) {
            console.log("Playing song " + songUrl);
        }

        var disabled = false;
        if (!song.track.preview_url) disabled = true;

        return (
            <TouchableOpacity
                style={styles.item}
                onPress={playSound(song.track.preview_url)}
                disabled={disabled}
            >

                <Text style={[song.track.preview_url ? styles.preview : styles.noPreview]}>
                    {song.track.name}
                </Text>
                <Text
                    style={[song.track.preview_url ? styles.artist : styles.noPreview]}>
                    {song.track.artists[0].name}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        margin: 10
    },
    preview: {
        color: '#fff',
    },
    noPreview: {
        color: '#555'
    },
    artist: {
        color: '#999'
    }
});

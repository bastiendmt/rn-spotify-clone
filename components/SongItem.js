import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native'

export default class SongItem extends Component {
    render() {
        const {song} = this.props;
        return (
            <TouchableOpacity
                style={styles.item}

            >
                <Text style={styles.title}>{song.track.name}</Text>
                <Text style={styles.artist}>artist</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        width: '100%',
        margin: 10
    },
    title: {

    },
    artist : {
        color : '#ccc'
    }
});

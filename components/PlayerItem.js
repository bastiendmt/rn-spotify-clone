import React from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native'
import SongItem from './SongItem'

const PlayerItem = (props) => {
    const { song } = props;

    displaySongStatus = () => {
        let sourceImage = require('../images/pause_white.png');
        if (!props.isPlaying) {
            sourceImage = require('../images/play_white.png');
        }
        return (
            <Image source={sourceImage} style={styles.statusIcon} />
        )
    }

    return (
        <View style={styles.playerContainer}>
            {/*<SongItem }/>*/}
            <Text style={styles.songContainer}>A song playing</Text>
            <TouchableOpacity
                style={styles.statusContainer}
                onPress={() => { }}
            >
                {displaySongStatus()}
            </TouchableOpacity>
        </View>
    )
}

export default PlayerItem

const styles = StyleSheet.create({
    playerContainer: {
        height: 50,
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: '#1db954'
    },
    songContainer: {
        flex: 8,
        color: '#fff',
        marginLeft: 10
    },
    statusContainer: {
        flex: 2,
        position: 'absolute',
        right: 10,
    },
    statusIcon: {
        height: 20,
        width: 20,
    }
});
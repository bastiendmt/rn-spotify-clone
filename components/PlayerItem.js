import React, { useEffect, useMemo } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, Image } from 'react-native'
import { Audio } from 'expo-av';


const PlayerItem = (props) => {
    const [sound, setSound] = React.useState();
    const { song, togglePlayPause, isPlaying } = props;

    displaySongStatus = () => {
        let sourceImage = require('../assets/pause_white.png');
        if (!props.isPlaying) {
            sourceImage = require('../assets/play_white.png');
        }
        return (
            <Image source={sourceImage} style={styles.statusIcon} />
        )
    }

    async function loadSound() {
        const { sound } = await Audio.Sound.createAsync({ uri: song.track.preview_url });
        setSound(sound);
    }

    async function playSound() {
        await sound.playAsync();
    }

    async function pauseSound() {
        await sound.pauseAsync()
    }

    useEffect(() => {
        // Playing new song OR loading sound
        loadSound()
    }, [song])

    useEffect(() => {
        // Play/Pause sound
        sound ?
            isPlaying ? playSound() : pauseSound()
            : null
    }, [isPlaying, sound])

    useEffect(() => {
        //clearing sound
        return sound
            ? () => {
                sound.unloadAsync();
            }
            : undefined;
    }, [sound]);

    return (
        <View style={styles.playerContainer}>
            <View style={styles.songInfos}>
                <Text style={styles.songContainer}>{song.track.name}</Text>
                <Text style={styles.artistContainer}>{song.track.artists[0].name}</Text>
            </View>

            <TouchableOpacity
                style={styles.statusContainer}
                onPress={togglePlayPause}
            >
                {displaySongStatus()}
            </TouchableOpacity>
        </View>
    )
}

export default PlayerItem

const styles = StyleSheet.create({
    playerContainer: {
        height: 70,
        flex: 1,
        backgroundColor: '#000',
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 2,
        borderTopColor: '#1db954'
    },
    songInfos: {
        flex: 8,
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    songContainer: {
        color: '#fff',
        marginLeft: 10
    },
    artistContainer: {
        color: '#999',
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
import React from 'react';
import { GetPlaylists } from "../API";
import { FlatList, StyleSheet, Text, View, ScrollView } from "react-native";
import PlaylistItem from "../components/PlaylistItem";
import PlayerItem from "../components/PlayerItem";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            isPlaying: false
        }
    }

    async loadPlaylist() {
        await GetPlaylists().then(data => {
            this.setState({ playlists: data.playlists.items });
        })
    }

    goToPlaylist = (idPlaylist) => {
        this.props.navigation.navigate("PlaylistDetail", { idPlaylist: idPlaylist })
    }

    componentDidMount() {
        this.loadPlaylist()
    }

    displayPlaylists = () => {
        return <View style={styles.playlistContainer}>
            {this.state.playlists.map(item => (
                <PlaylistItem
                    key={item.id}
                    playlist={item}
                    displayPlaylist={this.goToPlaylist}
                />
            ))}
        </View>
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>
                        Editor's picks
                    </Text>
                    <ScrollView contentContainerStyle={styles.scrollviewContainer}>
                        {this.displayPlaylists()}
                    </ScrollView>
                </View>

                <View style={styles.playerContainer}>
                    {/* <PlayerItem /> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    playerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    scrollviewContainer: {
        alignItems: 'center',
        marginTop: 32
    },
    playlistContainer: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    title: {
        paddingTop : 32,
        color: '#fff',
        fontSize: 32
    },
    listItem: {
        flexDirection: 'row'
    },
    error: {
        color: '#fff'
    }
});
import React from 'react';
import {GetPlaylists} from "../API";
import {FlatList, StyleSheet, Text, View} from "react-native";
import PlaylistItem from "./PlaylistItem";
import PlayerItem from "./PlayerItem";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: [],
            isPlaying : false
        }
    }

    loadPlaylist() {
        GetPlaylists().then(data => {
                this.setState({playlists: data.playlists.items});
            }
        )
    }

    displayPlaylist = (idPlaylist) => {
        this.props.navigation.navigate("PlaylistDetail", {idPlaylist: idPlaylist})
    };

    componentDidMount() {
        this.loadPlaylist()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.title}
                    onPress={() => this.loadPlaylist()}
                >
                    Editor's picks
                </Text>

                <View style={styles.playlistContainer}>
                    <FlatList
                        data={this.state.playlists}
                        style={styles.listItem}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) =>
                            <PlaylistItem
                                key={item.id}
                                playlist={item}
                                displayPlaylist={this.displayPlaylist}
                            />}
                    />
                </View>

                <PlayerItem/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    title: {
        marginTop: '20%',
        color: '#fff',
        fontSize: 32
    },
    playlistContainer: {
        alignItems: 'center'
    },
    listItem: {
        flexDirection: 'column'
    }
});
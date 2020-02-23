import React from 'react';
import {GetPlaylists} from "../API";
import {FlatList, StyleSheet, Text, View} from "react-native";
import PlaylistItem from "./PlaylistItem";


export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        }
    }

    loadPlaylist() {
        GetPlaylists().then(data => {
                this.setState({playlists: data.playlists.items});
            }
        )
    }

    componentDidMount() {
        this.loadPlaylist()
    }

    displayPlaylist = (idPlaylist) => {
        console.log(idPlaylist);
        this.props.navigation.navigate("PlaylistDetail", {idPlaylist : idPlaylist})
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title} onPress={() => this.loadPlaylist()}>Editor's picks</Text>
                <View style={styles.playlistContainer}>
                    <FlatList
                        data={this.state.playlists}
                        style={styles.listItem}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <PlaylistItem playlist={item} displayPlaylist={this.displayPlaylist}/>}
                    />

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
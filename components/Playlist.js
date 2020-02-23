import React from 'react';
import {GetPlaylists} from "../API";
import {FlatList, StyleSheet, Text, View} from "react-native";
import data from "../data";
import PlaylistItem from "./PlaylistItem";


export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlists: []
        }
    }


    loadPlaylist() {
        GetPlaylists()
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Editor's picks</Text>
                <View style={styles.playlistContainer}>
                    <FlatList
                        data={data}
                        style={styles.listItem}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <PlaylistItem playlist={item}></PlaylistItem>}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#cFc',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        marginTop: '20%',
        color: '#fff',
        fontSize: 32
    },
    playlistContainer : {
        flexWrap: 'wrap',
        flex : 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 30
    },
    listItem : {

    }
});
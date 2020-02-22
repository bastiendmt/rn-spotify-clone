import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Playlist from "./screens/PlaylistDetail";
import GetPlaylists from './API';

export default function App() {
    
    GetPlaylists().then((data) => {
        console.log(data)
    });


    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Editor's picks</Text>
            <Playlist></Playlist>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    title: {
        marginTop: '20%',
        color: '#fff',
        fontSize: 32
    }
});
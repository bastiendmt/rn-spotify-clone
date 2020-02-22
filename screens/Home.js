import React, {Component} from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Playlist from './PlaylistDetail';

export default class Home extends React.Component {
    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Editor's picks</Text>
                <Playlist></Playlist>
            </ScrollView>
        )
    }
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
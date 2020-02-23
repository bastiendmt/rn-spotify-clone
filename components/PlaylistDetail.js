import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <Text>Détail de la playlist</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AFA',
    }
});
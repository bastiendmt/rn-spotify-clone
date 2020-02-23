import React from 'react';
import {FlatList, StyleSheet, Text, View} from "react-native";
import GetPlaylistDetail from '../API'

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist : undefined
        }
    }

    componentDidMount() {
        GetPlaylistDetail(this.props.route.params.idPlaylist).then(data => {
            this.setState({playlist : data})
        });
    }


   



    render() {
        const idPlaylist = this.props.route.params.idPlaylist
        return (
            <View style={styles.container}>
                <Text>Détail de la playlist {idPlaylist}</Text>
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
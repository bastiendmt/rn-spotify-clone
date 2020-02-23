import React from 'react';
import {FlatList, StyleSheet, Text, View, Image} from "react-native";
import {GetPlaylistDetail} from '../API'

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: undefined
        }
    }

    componentDidMount() {
        GetPlaylistDetail(this.props.route.params.idPlaylist).then(data => {
            this.setState({playlist: data})
        });
    }

    displayPlaylistDetail() {
        if (this.state.playlist != undefined ) {
            console.log(this.state.playlist.images[0].url);
            return (
                <View style={styles.header}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{uri: this.state.playlist.images[0].url}}
                            style={styles.image}
                        />
                    </View>
                    <View style={styles.infos}>
                        <Text style={styles.title}>{this.state.playlist.name}</Text>
                        <Text style={styles.author}>Playlist by {this.state.playlist.owner.display_name}</Text>
                        <Text style={styles.description}>{this.state.playlist.description}</Text>
                        <Text style={styles.followers}>{this.state.playlist.followers.total} followers</Text>
                    </View>
                </View>
            )
        }
    }

    displaySongs(){

    }


    render() {
        const idPlaylist = this.props.route.params.idPlaylist
        return (
            <View style={styles.container}>
                {this.displayPlaylistDetail()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AFA',
    },
    header: {
        flexDirection: 'row'
    },
    image : {
        margin : 5,
        width : 100,
        height : 100,
    },
    imageContainer: {
        flex: 4,
    },
    infos: {
        flex: 8,
        flexDirection: 'column'
    },
    description : {
        marginTop : 10
    },
    title: {
        fontSize: 24,
    },
    author: {
        color: '#ccc'
    },
    followers: {
        color: '#ccc'
    },


});
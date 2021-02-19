import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'
import { GetPlaylistDetail } from '../API'
import SongItem from '../components/SongItem'
import PlayerItem from '../components/PlayerItem'

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playlist: undefined
        }
    }

    componentDidMount() {
        GetPlaylistDetail(this.props.route.params.idPlaylist).then(data => {
            this.setState({ playlist: data })
        });
    }

    displayPlaylistDetail() {
        if (this.state.playlist != undefined) {
            return (
                <LinearGradient
                    style={styles.header}
                    colors={['#000', '#006400']}
                >
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: this.state.playlist.images[0].url }}
                            style={styles.image}
                        />
                    </View>

                    <View style={styles.infos}>
                        <Text style={styles.title}>{this.state.playlist.name}</Text>
                        <Text style={styles.author}>Playlist by {this.state.playlist.owner.display_name}</Text>
                        <Text style={styles.description}>{this.state.playlist.description}</Text>
                        <Text style={styles.followers}>{this.state.playlist.followers.total} followers</Text>
                    </View>
                </LinearGradient>
            )
        }
    }

    displaySongs() {
        if (this.state.playlist != undefined) {
            return (
                <ScrollView>
                    {this.state.playlist.tracks.items.map((item) => (
                        <SongItem key={item.track.id} song={item} />
                    ))}
                </ScrollView>
            )
        } else {
            return (<Text>Aucun son trouvé</Text>)
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.displayPlaylistDetail()}
                    {this.displaySongs()}
                </View>
                <View style={styles.playerContainer}>
                    <PlayerItem />
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
    header: {
        padding: 20,
        marginTop: 50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#0F0'
    },
    playerContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    image: {
        margin: 5,
        width: 120,
        height: 120,
    },
    imageContainer: {
        flex: 4,
    },
    infos: {
        flex: 8,
        flexDirection: 'column'
    },
    description: {
        color: '#fff',
        marginTop: 10
    },
    title: {
        fontSize: 24,
        color: '#fff',
    },
    author: {
        color: '#999'
    },
    followers: {
        color: '#999'
    },
});
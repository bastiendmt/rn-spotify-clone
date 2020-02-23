import React, {Component} from 'react'
import {TouchableOpacity, Text, StyleSheet, Image} from 'react-native'

export default class PlaylistItem extends Component {


    render() {
        const playlist = this.props.playlist;
        return (
            <TouchableOpacity style={styles.item}>
                <Image
                    source={{uri:playlist.images[0].url}}
                    style={styles.image}
                />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    item: {
        width : 150,
        height: 150,
        backgroundColor : '#0fC',
        // margin : 10
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    image : {
        width: '100%',
        height: 150
    }
});

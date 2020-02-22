import React from 'react';
import {ScrollView, StyleSheet, Text, View, FlatList} from 'react-native';
import GetPlaylists from './API';
import data from './data';
import PlaylistItem from "./components/PlaylistItem";

export default function App() {

    // GetPlaylists().then((data) => {
    //     console.log(data)
    // });


    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editor's picks</Text>
            <FlatList

                data = {data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => <Text>{item.name}</Text>}

                // renderItem={((item) => <PlaylistItem playlist={item}/>)}
            />

        </View>
    );
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
    }
});
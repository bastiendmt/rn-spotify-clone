import React, { useEffect, useState } from 'react';
import { GetPlaylists } from '../API';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PlaylistItem from '../components/PlaylistItem';
import { FeaturedPlaylists } from '../types';

const Home = ({ navigation }) => {
  const [playlists, setPlaylists] = useState<
    FeaturedPlaylists['playlists']['items']
  >([]);

  const goToPlaylist = (idPlaylist: string) => {
    navigation.navigate('PlaylistDetail', {
      idPlaylist: idPlaylist,
    });
  };

  useEffect(() => {
    GetPlaylists().then((data) => {
      setPlaylists(data.playlists.items);
    });
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>Editor's picks</Text>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <View style={styles.playlistContainer}>
            {playlists.map((item) => (
              <PlaylistItem
                key={item.id}
                playlist={item}
                displayPlaylist={goToPlaylist}
              />
            ))}
          </View>
        </ScrollView>
      </View>

      <View style={styles.playerContainer}>{/* <PlayerItem /> */}</View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  playerContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  scrollViewContainer: {
    alignItems: 'center',
  },
  playlistContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  title: {
    paddingTop: 32,
    color: '#fff',
    fontSize: 32,
  },
  listItem: {
    flexDirection: 'row',
  },
  error: {
    color: '#fff',
  },
});

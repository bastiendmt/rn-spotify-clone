import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { GetPlaylistDetail } from '../API';
import SongItem from '../components/SongItem';
import PlayerItem from '../components/PlayerItem';
import { PlaylistDetail, Song } from '../types';

const Playlist = ({ route }) => {
  const [playlist, setPlaylist] = useState<PlaylistDetail>();
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState<Song>(undefined);

  const playSong = (song: Song) => {
    setSong(song);
    setIsPlaying(true);
  };

  const playPauseSong = () => {
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    GetPlaylistDetail(route.params.idPlaylist).then((data) => {
      setPlaylist(data);
    });
  });

  const formatFollowers = (num: number) => {
    let units = ['K', 'M', 'B', 'T', 'Q'];
    let unit = Math.floor((num / 1.0e1).toFixed(0).toString().length);
    let r = unit % 3;
    let x = Math.abs(Number(num)) / Number('1.0e+' + (unit - r));
    return x.toFixed(2) + ' ' + units[Math.floor(unit / 3) - 1];
  };

  function displayPlaylistDetail() {
    if (playlist) {
      return (
        <LinearGradient style={styles.header} colors={['#000', '#006400']}>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: playlist.images[0].url }}
              style={styles.image}
            />
          </View>

          <View style={styles.infos}>
            <Text style={styles.title}>{playlist.name}</Text>
            <Text style={styles.author}>
              Playlist by {playlist.owner.display_name}
            </Text>
            <Text style={styles.description}>{playlist.description}</Text>
            <Text style={styles.followers}>
              {formatFollowers(playlist.followers.total)} followers
            </Text>
          </View>
        </LinearGradient>
      );
    }
  }

  function displaySongs() {
    if (playlist) {
      return (
        <ScrollView>
          {playlist.tracks.items.map((item) => (
            <SongItem
              key={item.track.id}
              song={item}
              handlePlaySong={() => playSong(item)}
            />
          ))}
        </ScrollView>
      );
    }
    return <Text>Aucun son trouvé</Text>;
  }

  return (
    <View style={styles.container}>
      <View>
        {displayPlaylistDetail()}
        {displaySongs()}
      </View>

      <View style={styles.playerContainer}>
        {song && (
          <PlayerItem
            song={song}
            isPlaying={isPlaying}
            togglePlayPause={playPauseSong}
          />
        )}
      </View>
    </View>
  );
};

export default Playlist;

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
    borderBottomColor: '#0F0',
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
    flexDirection: 'column',
  },
  description: {
    color: '#fff',
    marginTop: 10,
  },
  title: {
    fontSize: 24,
    color: '#fff',
  },
  author: {
    color: '#999',
  },
  followers: {
    color: '#999',
  },
});

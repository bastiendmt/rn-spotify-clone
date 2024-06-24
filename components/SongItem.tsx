import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const SongItem = ({ song, handlePlaySong }) => {
  const playable = song.track.preview_url;

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={handlePlaySong}
      disabled={!playable}
    >
      <Text style={[playable ? styles.preview : styles.noPreview]}>
        {song.track.name}
      </Text>
      <Text style={[playable ? styles.artist : styles.noPreview]}>
        {song.track.artists[0].name}
      </Text>
    </TouchableOpacity>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  item: {
    width: '100%',
    margin: 10,
  },
  preview: {
    color: '#fff',
  },
  noPreview: {
    color: '#555',
  },
  artist: {
    color: '#999',
  },
});

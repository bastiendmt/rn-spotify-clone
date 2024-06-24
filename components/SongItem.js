import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SongItem = (props) => {
  const { song, handlePlaySong } = props;

  !song.track.preview_url ? (disabled = true) : (disabled = false);

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={handlePlaySong}
      disabled={disabled}
    >
      <Text
        style={[song.track.preview_url ? styles.preview : styles.noPreview]}
      >
        {song.track.name}
      </Text>
      <Text style={[song.track.preview_url ? styles.artist : styles.noPreview]}>
        {song.track.artists[0].name}
      </Text>
    </TouchableOpacity>
  );
};

export default SongItem;

const styles = StyleSheet.create({
  item: {
    width: "100%",
    margin: 10,
  },
  preview: {
    color: "#fff",
  },
  noPreview: {
    color: "#555",
  },
  artist: {
    color: "#999",
  },
});

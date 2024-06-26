import { FeaturedPlaylists, PlaylistDetail } from './types';

const baseUrl = 'https://api.spotify.com';
const accessToken = process.env.EXPO_PUBLIC_ACCESS_TOKEN;

export async function GetPlaylists(): Promise<FeaturedPlaylists> {
  let url = baseUrl + '/v1/browse/featured-playlists';
  return fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export async function GetPlaylistDetail(idPlayslit): Promise<PlaylistDetail> {
  let url = baseUrl + '/v1/playlists/' + idPlayslit;
  return fetch(url, {
    headers: new Headers({
      Authorization: `Bearer ${accessToken}`,
    }),
  })
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

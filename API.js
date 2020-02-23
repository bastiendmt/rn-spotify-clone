const baseUrl = 'https://afternoon-waters-49321.herokuapp.com';

export default function GetPlaylists(){
    let url = baseUrl + '/v1/browse/featured-playlists';
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}

export function GetPlaylistDetail(idPlayslit){
    let url = baseUrl + '/v1/playlists/' + idPlayslit;
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
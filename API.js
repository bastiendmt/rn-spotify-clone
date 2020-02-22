const baseUrl = 'https://afternoon-waters-49321.herokuapp.com';

export default async function GetPlaylists(){
    let url = baseUrl + '/v1/browse/featured-playlists';
    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (error) {
        return console.error(error);
    }
}
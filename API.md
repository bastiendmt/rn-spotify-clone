# Player API

We will use a custom API (which is bound to Spotify API) to retrieve data needed for your player application.

You will find the documentation for the API in this document. You can also use the [Spotify Web API](https://developer.spotify.com/documentation/web-api/reference/) documentation if you are missing any information, the API are the same.

**However**, if you do use the official documentation, make sure to replace the base API ` https://api.spotify.com` and always use `https://afternoon-waters-49321.herokuapp.com`.

**Base API URL**: https://afternoon-waters-49321.herokuapp.com

**Authentication method**: None

## Get a List of Featured Playlists - [Documentation](https://developer.spotify.com/documentation/web-api/reference/browse/get-list-featured-playlists/)

**Endpoint**

`GET https://afternoon-waters-49321.herokuapp.com/v1/browse/featured-playlists`

**Parameters**

- `locale`: Optional. The desired language, consisting of a lowercase ISO 639-1 language code and an uppercase ISO 3166-1 alpha-2 country code, joined by an underscore. For example: es_MX, meaning “Spanish (Mexico)”.
- `country`: Optional. A country: an ISO 3166-1 alpha-2 country code. Provide this parameter if you want the list of returned items to be relevant to a particular country.
- `timestamp`: Optional. A timestamp in ISO 8601 format: yyyy-MM-ddTHH:mm:ss. Use this parameter to specify the user’s local time to get results tailored for that specific date and time in the day.
- `limit`: Optional. The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50
- `offset`: Optional. The index of the first item to return. Default: 0 (the first object). Use with limit to get the next set of items.

**Result preview**
```json
{
    "message": "Editor's picks",
    "playlists": {
        "href": "https://afternoon-waters-49321.herokuapp.com/v1/browse/featured-playlists?timestamp=2019-04-12T11%3A26%3A05&offset=0&limit=1",
        "items": [
            {
                "collaborative": false,
                "external_urls": {
                    "spotify": "https://open.spotify.com/playlist/37i9dQZF1DWXJfnUiYjUKT"
                },
                "href": "https://afternoon-waters-49321.herokuapp.com/v1/playlists/37i9dQZF1DWXJfnUiYjUKT",
                "id": "37i9dQZF1DWXJfnUiYjUKT",
                "images": [
                    {
                        "height": null,
                        "url": "https://pl.scdn.co/images/pl/default/3a60cb6ef4035bdb483e62b081dcc1656f0b1b14",
                        "width": null
                    }
                ],
                "name": "New Music Friday",
                "owner": {
                    "display_name": "Spotify",
                    "external_urls": {
                        "spotify": "https://open.spotify.com/user/spotify"
                    },
                    "href": "https://afternoon-waters-49321.herokuapp.com/v1/users/spotify",
                    "id": "spotify",
                    "type": "user",
                    "uri": "spotify:user:spotify"
                },
                "primary_color": null,
                "public": null,
                "snapshot_id": "MTU1NTA1OTY2MCwwMDAwMDBkMjAwMDAwMTZhMTBjNzU1M2YwMDAwMDE2YTBlMTE0OWIw",
                "tracks": {
                    "href": "https://afternoon-waters-49321.herokuapp.com/v1/playlists/37i9dQZF1DWXJfnUiYjUKT/tracks",
                    "total": 100
                },
                "type": "playlist",
                "uri": "spotify:playlist:37i9dQZF1DWXJfnUiYjUKT"
            }
        ],
        "limit": 1,
        "next": "https://afternoon-waters-49321.herokuapp.com/v1/browse/featured-playlists?timestamp=2019-04-12T11%3A26%3A05&offset=1&limit=1",
        "offset": 0,
        "previous": null,
        "total": 12
    }
}
```

## Get a playlist informations - [Documentation](https://developer.spotify.com/documentation/web-api/reference/playlists/get-playlist/)

**Endpoint**

`GET https://afternoon-waters-49321.herokuapp.com/v1/playlists/[PLAYLIST_ID]`

**Parameters**

- `fields`: Optional. Filters for the query: a comma-separated list of the fields to return. If omitted, all fields are returned. For example, to get just the playlist’s description and URI: fields=description,uri

**Result preview**
```json
{
    collaborative	false
    description	"Fall into a deep relaxin…g sounds. Sweet dreams."
    external_urls	{…}
    followers	{…}
    href	"https://afternoon-waters…s/37i9dQZF1DWZd79rJ6a7lp"
    id	"37i9dQZF1DWZd79rJ6a7lp"
    images	[…]
    name	"Sleep"
    owner
    display_name	"Spotify"
    external_urls	{…}
    href	"https://afternoon-waters…app.com/v1/users/spotify"
    id	"spotify"
    type	"user"
    uri	"spotify:user:spotify"
    primary_color	null
    public	true
    snapshot_id	"MTU1MjY3MDk5MCwwMDAwMDBh…zcwMDAwMDE2ODk4ZTNiMjY5"
    tracks
        href	"https://afternoon-waters…racks?offset=0&limit=100"
        items	[
            added_at	"2019-03-14T21:40:53Z"
            added_by	{…}
            is_local	false
            primary_color	null
            track
            album	{…}
            artists	[…]
            available_markets	[…]
            disc_number	1
            duration_ms	232385
            episode	false
            explicit	false
            external_ids	{…}
            external_urls	{…}
            href	"https://afternoon-waters…s/0wpHo9ufyiNdbnr9lIe0B8"
            id	"0wpHo9ufyiNdbnr9lIe0B8"
            is_local	false
            name	"Enter the Unseen"
            popularity	71
            preview_url	"https://p.scdn.co/mp3-pr…8f8d4deaa5c4400c6619021b"
            track	true
            track_number	2
            type	"track"
            uri	"spotify:track:0wpHo9ufyiNdbnr9lIe0B8"
            video_thumbnail	{…}
        ]
        limit	100
        next	"https://afternoon-waters…cks?offset=100&limit=100"
        offset	0
        previous	null
        total	182
    type	"playlist"
    uri	"spotify:playlist:37i9dQZF1DWZd79rJ6a7lp"
}
```
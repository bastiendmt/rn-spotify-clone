import { load } from 'https://deno.land/std@0.224.0/dotenv/mod.ts';

const env = await load();
const clientId = env['APP_SPOTIFY_CLIENT_ID'];
const clientSecret = env['APP_SPOTIFY_CLIENT_SECRET'];

await fetch('https://accounts.spotify.com/api/token', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
})
  .then((response) => response.json().then((data) => console.log(data)))
  .catch((error) => console.error(error));

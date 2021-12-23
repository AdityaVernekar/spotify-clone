import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  " playlist - read - private",
  "playlist - read - collaboraive",
  "streaming",
  " user - read - private",
  " user - library - read",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-top-read",
  "user-follow-read",
].join(",");

const params = {
  scope: scopes,
};

const queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.NEXT_PUBLIC__CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC__CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };
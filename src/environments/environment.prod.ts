export const environment = {
  production: true,
  spotify: { // separate for need add other API
    urlBase: 'https://api.spotify.com/v1',
    urlAuth: 'https://accounts.spotify.com/authorize?',
    stateKey: 'spotify_auth_state',
    scope: 'user-read-private user-read-email',
    state: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    client_id: '8ada78f5c0ac4b8cba5ba800bd366820',
    client_secret: 'f1f96391e09143248ca3b0c9137473c7',
    redirect_uri: 'http://localhost:8888/callback' //test
  }
};

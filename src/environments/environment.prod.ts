export const environment = {
  production: true,
  spotify: { // separate for need add other API
    urlBase: 'https://api.spotify.com/v1',
    urlAuth: 'https://accounts.spotify.com/authorize?',
    stateKey: 'spotify_auth_state',
    scope: 'user-read-private user-read-email',
    state: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
    client_id: 'your client id',
    client_secret: 'your client secret',
    redirect_uri: '' 
  }
};

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDH7jL7bD1QEvCDndLWiNkoinLrKBF1Dgo',
    authDomain: 'star-wars-characters-example.firebaseapp.com',
    databaseURL: 'https://star-wars-characters-example.firebaseio.com',
    projectId: 'star-wars-characters-example',
    storageBucket: 'star-wars-characters-example.appspot.com',
    messagingSenderId: '475385590925'
  }
};

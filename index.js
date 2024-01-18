import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately


//configuring amplify ui to be used in this app
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';


Amplify.configure(awsconfig);

registerRootComponent(App);

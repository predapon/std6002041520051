/**
 * @format
 */

import {AppRegistry} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import App from './App';
// import App from './Components/App'
import {name as appName} from './app.json';
import LoginScreen from './Components/Login';
import ProfileScreen from './Components/Profile';

const MainNavigator = createStackNavigator({
    Login: {screen: LoginScreen},
    Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);

AppRegistry.registerComponent(appName, () => App);

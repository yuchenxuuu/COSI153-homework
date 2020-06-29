import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Signup from "../screens/Signup";
import Home from "../screens/Home";

const screens = {
    Home: {
        screen: Home
    },
    Signup: {
        screen: Signup
    }
}
const HomeStack =  createStackNavigator(screens);

export default createAppContainer(HomeStack);
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Home from "../components/Home";
import MyInput from "../components/MyInput";

const HomeStack = createStackNavigator( {
    home: {
        screen: Home
    },
    register: {
        screen: MyInput
    }
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: 'red',
        }
    }
} );

export const AppContainer = createAppContainer( HomeStack );
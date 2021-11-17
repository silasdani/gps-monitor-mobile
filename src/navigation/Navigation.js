import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { LocationsScreen } from '../screens/LocationsScreen';
import { DashboardScreen } from '../screens/DashboardScreen';
import { SignUpScreen } from '../screens/SignUpScreen'
import { LoginScreen } from '../screens/LoginScreen';

const AppNavigator = createStackNavigator(
    {
        Locations: LocationsScreen,
        Dashboard: DashboardScreen,
        Login: LoginScreen,
        SignUp: SignUpScreen,
    },
    {
        initialRouteName: 'Login',
    }
);

export default createAppContainer(AppNavigator);

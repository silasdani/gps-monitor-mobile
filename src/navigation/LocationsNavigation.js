import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LocationsScreen from '../screens/LocationsScreen';

const LocationsNavigator = createStackNavigator({
    Locations: LocationsScreen,
});

export default createAppContainer(LocationsNavigator);
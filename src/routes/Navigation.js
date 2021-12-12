import React from 'react';
import { LocationsScreen, DashboardScreen, SignUpScreen, LoginScreen } from '../screens';
import Spinner from '../components/Spinner'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../utils/Colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const defaultOptions = {
    headerStyle: {
        backgroundColor: Colors.blueSteel,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
}



export const Home = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: 'LOGIN',
                    ...defaultOptions
                }}
            />
            <Drawer.Screen
                name="SignUp"
                component={SignUpScreen}
                options={{
                    title: 'SIGN UP',
                    ...defaultOptions
                }}
            />
        </Drawer.Navigator>
    )
}

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="Login/SignUp"
                component={Home}
            />
            <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    title: 'MY LOCATIONS',
                    ...defaultOptions,
                }}
            />
            <Stack.Screen
                name="Locations"
                component={LocationsScreen}
                options={{
                    title: 'MAP',
                    ...defaultOptions
                }}
            />
            <Stack.Group
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name='Spinner' component={Spinner} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default StackNavigation;
import React from 'react';
import {
    LocationsScreen,
    DashboardScreen,
    SignUpScreen,
    LoginScreen
} from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const defaultOptions = {
    headerStyle: {
        backgroundColor: '#FAEBD7',
    },
    // headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#000000'
    },
}

export const Home = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={defaultOptions}

            />
            <Drawer.Screen
                name="SignUp"
                component={SignUpScreen}
                options={defaultOptions}

            />
        </Drawer.Navigator>
    )
}

export const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login/SignUp"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Dashboard"
                component={DashboardScreen}
                options={{
                    title: 'Home',
                    ...defaultOptions,
                }}
            />
            <Stack.Screen
                name="Locations"
                component={LocationsScreen}
                options={defaultOptions}
            />
        </Stack.Navigator>
    );
}

export default connect()(StackNavigation);
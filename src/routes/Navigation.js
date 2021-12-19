import React from 'react';
import { LocationsScreen, DashboardScreen, SignUpScreen, LoginScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../utils/Colors';
import { connect } from 'react-redux';

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
        <Drawer.Navigator screenOptions={{
            drawerStyle: {
                backgroundColor: Colors.kindaGray
            }
        }
        } >
            <Drawer.Screen
                name="Login"
                component={LoginScreen}
                options={{
                    title: 'LOGIN',
                    ...defaultOptions
                }}
            />
            <Drawer.Screen
                name="Signup"
                component={SignUpScreen}
                options={{
                    title: 'SIGN UP',
                    ...defaultOptions
                }}
            />
        </Drawer.Navigator>
    )
}

const StackNavigation = (props) => {
    console.warn(props)
    return (
        <Stack.Navigator initialRouteName='Login'>
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
                    title: 'HOME',
                    ...defaultOptions,
                    headerBackButtonMenuEnabled: false,
                    headerBackVisible: false
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
        </Stack.Navigator>
    );
}

export default connect((state) => ({ user: state.user }))(StackNavigation);
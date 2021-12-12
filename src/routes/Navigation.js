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
        <Drawer.Navigator>
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
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' },
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 0.5, 0.9, 1],
                            outputRange: [0, 0.25, 0.7, 1],
                        }),
                    },
                    overlayStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.5],
                            extrapolate: 'clamp',
                        }),
                    },
                }),
            }}
            mode="modal"
        >
            <Stack.Group>
                <Stack.Screen
                    name="Login/SignUp"
                    component={Home}
                    options={{ headerShown: false }}
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
            </Stack.Group>
            <Stack.Group screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'transparent' },
                cardOverlayEnabled: true,
                cardStyleInterpolator: ({ current: { progress } }) => ({
                    cardStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 0.5, 0.9, 1],
                            outputRange: [0, 0.25, 0.7, 1],
                        }),
                    },
                    overlayStyle: {
                        opacity: progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [0, 0.5],
                            extrapolate: 'clamp',
                        }),
                    },
                }),
            }}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                        cardStyle: { backgroundColor: 'transparent' },
                        cardOverlayEnabled: true,
                        cardStyleInterpolator: ({ current: { progress } }) => ({
                            cardStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 0.5, 0.9, 1],
                                    outputRange: [0, 0.25, 0.7, 1],
                                }),
                            },
                            overlayStyle: {
                                opacity: progress.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 0.5],
                                    extrapolate: 'clamp',
                                }),
                            },
                        }),
                    }}
                    name='Spinner' component={Spinner} />
            </Stack.Group>
        </Stack.Navigator>
    );
}

export default StackNavigation;
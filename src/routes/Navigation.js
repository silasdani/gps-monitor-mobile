import React from 'react';
import { LocationsScreen, DashboardScreen, SignUpScreen, LoginScreen } from '../screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Colors from '../utils/Colors';
import { connect } from 'react-redux';
import OverflowMenu from '../components/OverflowMenu';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeDrawer = createDrawerNavigator();

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
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: Colors.green,
                    opacity: 0.8,
                },
                drawerLabelStyle: {
                    fontWeight: 'bold',
                    color: 'white',
                    fontSize: 20,
                    alignSelf: 'flex-end'
                },
                drawerItemStyle: {
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    marginTop: -3,
                },
                drawerActiveBackgroundColor: Colors.activeGreen,
            }}
        >
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
    return props.session.signedIn ?
        (
            <HomeDrawer.Navigator
                drawerContent={(props) => <OverflowMenu {...props} />}
                screenOptions={{
                    drawerStyle: {
                        backgroundColor: Colors.green,
                        paddingHorizontal: 15,
                        opacity: 0.8,
                    }
                }}
            >
                <HomeDrawer.Screen
                    name="Dashboard"
                    component={DashboardScreen}
                    options={{
                        title: props.session.user.name.toUpperCase(),
                        ...defaultOptions,
                    }}
                />
                <HomeDrawer.Screen
                    name="Locations"
                    component={LocationsScreen}
                    options={{
                        title: 'MAP',
                        ...defaultOptions,
                    }}
                />
            </HomeDrawer.Navigator >
        ) : (
            <Stack.Navigator initialRouteName='Login'>
                <Stack.Screen
                    name='L/S'
                    component={Home}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>);
}

export default connect((state) => ({ session: state.session }))(StackNavigation);
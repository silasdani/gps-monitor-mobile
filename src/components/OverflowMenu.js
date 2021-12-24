import React from "react";
import { connect } from "react-redux";
import GravatarIcon from "./GravatarIcon";
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { logout } from "../redux/sessionDuck";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors";
import { DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Entypo';
import Spacer from "./Spacer";
import Fonts from "../utils/Fonts";

const OverflowMenu = (props) => {
    const { email, name } = props.user;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.drawer}>
                <View style={styles.group}>
                    <GravatarIcon email={email} style={styles.avatar} />
                    <View>
                        <Text style={styles.name}>{name}</Text>
                        <Spacer height={5} />
                        <Text style={styles.hashtag}>@{email?.split('@', 1)}</Text>
                    </View>
                </View>
                <Spacer height={30} />
                <View style={styles.delimiter} />
                <DrawerItem
                    label={'DASHBOARD'}
                    labelStyle={styles.label}
                    icon={() => (<Icon name="direction" size={25} color={Colors.white} />)}
                    onPress={() => props.navigation.navigate('Dashboard')}
                />
                <View style={styles.delimiter} />
                <DrawerItem
                    label={'PROFILE'}
                    labelStyle={styles.label}
                    icon={() => (<Icon name="user" size={25} color={Colors.white} />)}
                />
                <View style={styles.delimiter} />
                <DrawerItem
                    label={'SETTINGS'}
                    labelStyle={styles.label}
                    icon={() => (<Icon name="v-card" size={25} color={Colors.white} />)}
                />
                <View style={styles.delimiter} />
                <DrawerItem
                    label={'ABOUT'}
                    labelStyle={styles.label}
                    icon={() => (<Icon name="info" size={25} color={Colors.white} />)}
                />
                <View style={styles.delimiter} />

                <TouchableOpacity
                    style={styles.logout}
                    onPress={() => props.logout()}
                >
                    <Icon name="log-out" size={25} color={Colors.white} />
                    <Spacer width={35} />
                    <Text style={styles.label}>LOGOUT</Text>
                </TouchableOpacity>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const mapStateToProps = (state) => {
    const { user } = state.session;
    return {
        user
    }
}

export default connect(mapStateToProps, { logout })(OverflowMenu);

const styles = StyleSheet.create({
    drawer: {
        height: Dimensions.get('screen').height,
    },
    delimiter: {
        borderColor: Colors.white,
        borderWidth: 0.5,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
        zIndex: 50
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.white,
        fontFamily: Fonts.bodyText
    },
    hashtag: {
        fontSize: 18,
        color: Colors.ghostsWhisperGray,
    },
    avatar: {
        margin: 5,
    },
    group: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 70,
    },
    logout: {
        width: '100%',
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        paddingLeft: 20,
        bottom: 30,
    }
})
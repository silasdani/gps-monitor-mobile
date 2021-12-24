import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Colors from "../utils/Colors";
import Icon from 'react-native-vector-icons/Entypo';
import { connect } from "react-redux";
import { DrawerItem } from "@react-navigation/drawer";

const CustomDrawerContent = ({ navigation }) => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={styles.drawer}>
                <DrawerItem
                    label={'LOG IN'}
                    labelStyle={styles.label}
                    icon={() => (<Icon name="login" size={25} color={Colors.white} />)}
                    onPress={() => navigation.navigate('Login')}
                />
                <View style={styles.delimiter} />
                <DrawerItem
                    label={'SIGN UP'}
                    labelStyle={styles.label}
                    icon={() => (<Icon name="new" size={25} color={Colors.white} />)}
                    onPress={() => navigation.navigate('Signup')}
                />
                <View style={styles.delimiter} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default connect()(CustomDrawerContent);

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
})
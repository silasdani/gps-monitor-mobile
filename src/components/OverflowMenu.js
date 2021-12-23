import React from "react";
import { connect } from "react-redux";
import GravatarIcon from "./GravatarIcon";
import { Dimensions, StyleSheet, View } from "react-native";
import { logout } from "../redux/sessionDuck";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "./CustomButton";
import Colors from "../utils/Colors";

const OverflowMenu = (props) => {
    const { email, name } = props;

    return (
        <SafeAreaProvider>
            <SafeAreaView style={StyleSheet.drawer}>
                <GravatarIcon email={email} />
                <CustomButton
                    style={styles.button}
                    onPress={() => props.logout()}
                >
                    LOGOUT
                </CustomButton>
                <View style={styles.delimiter} />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, { logout })(OverflowMenu);

const styles = StyleSheet.create({
    drawer: {
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: Colors.green,
        opacity: 0.8,
    },
    button: {
        backgroundColor: 'transparent',
    },
    delimiter: {
        borderTopColor: Colors.white,
        borderTopWidth: 1,
    }
})
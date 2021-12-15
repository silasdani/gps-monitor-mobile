import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
} from 'react-native';
import Colors from '../utils/Colors';
import Fonts from '../utils/Fonts';

const CustomButton = (props) => {
    const textStyles = [styles.text, props.textStyle];
    if (!!props.enforceFullWidth) {
        textStyles.push(styles.textEnforceFullWidth)
    }

    return (
        <TouchableOpacity {...props} style={[styles.button, props.style, (props.disabled && styles.disabled)]}>
            <Text style={textStyles} >
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton;

const styles = StyleSheet.create({
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        borderRadius: 40,
        elevation: 2,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowRadius: 1,
        shadowOpacity: 0.50,
        backgroundColor: Colors.buttonColor,
    },
    disabled: {
        backgroundColor: Colors.disabledButtonColor,
    },
    text: {
        textAlign: 'center',
        fontFamily: Fonts.buttonText,
        fontSize: 20,
        fontWeight: '700',
        color: Colors.white,
        letterSpacing: Fonts.buttonLetterSpacing,
        paddingHorizontal: 3,
    },
    textEnforceFullWidth: {
        width: Dimensions.get('window').width - 30,
    },
});

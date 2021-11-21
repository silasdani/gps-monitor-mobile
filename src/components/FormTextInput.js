import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';
import Colors from '../utils/Colors'
import Fonts from '../utils/Fonts';

class FormTextInput extends Component {
    render() {
        const { onChange, required, labelText, disabled, value, capitalize, hasError } = this.props;

        return (
            <View>
                <Text style={styles.label} >
                    {labelText}
                    {required && <Text style={styles.redText}>
                        &nbsp;*
                    </Text>}
                </Text>
                {
                    disabled &&
                    <Text style={styles.textInput}>
                        {value}
                    </Text>
                }
                {!disabled &&
                    <View style={[styles.innerContainer, hasError && styles.containerError]} >
                        <TextInput
                            onChange={onChange}
                            {...this.props}
                            style={[styles.textInput, hasError && styles.error]}
                            autoCapitalize={capitalize || 'none'}
                            autoCorrect={false}
                            auto='none'
                            underlineColorAndroid='rgba(0,0,0,0)'
                            placeholderTextColor={Colors.formTextInputPlaceholderColor}
                            value={value}
                        />
                    </View>
                }
            </View>
        );
    }
}

export default FormTextInput;

const styles = StyleSheet.create({
    innerContainer: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: Colors.formTextInputBorderColor,
        backgroundColor: Colors.formTextInputBackgroundColor,
    },
    label: {
        width: '100%',
        textAlign: 'left',
        color: Colors.formTextInputLabelColor,
        fontSize: 14,
        fontWeight: 'bold',
        fontFamily: Fonts.bodyText,
        paddingBottom: 6,
    },
    textInput: {
        width: '100%',
        height: 40,
        color: Colors.formTextInputColor,
        fontSize: 16,
        paddingLeft: 14,
        fontFamily: Fonts.bodyText,
    },
    error: {
        borderColor: Colors.error,
        color: Colors.error,
    },
    containerError: {
        borderColor: Colors.error,
    },
    redText: {
        color: 'red'
    }
});

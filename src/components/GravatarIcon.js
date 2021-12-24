import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

const GravatarIcon = ({ email, style = {} }) => {
  return (
    <TouchableOpacity >
      <Gravatar
        options={{
          email: email,
          parameters: { "size": "100", "d": "mm" },
          secure: true
        }}
        style={{ ...styles.roundedProfileImage, ...style }}
      />
    </TouchableOpacity>
  )
}

export default GravatarIcon;

const styles = StyleSheet.create({
  roundedProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  }
})
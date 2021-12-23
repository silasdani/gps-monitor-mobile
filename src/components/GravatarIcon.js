import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

const GravatarIcon = (props) => {
  const { email } = props;
  return (
    <TouchableOpacity >
      <Gravatar
        options={{
          email: email,
          parameters: { "size": "100", "d": "mm" },
          secure: true
        }}
        style={styles.roundedProfileImage}
      />
    </TouchableOpacity>
  )
}

export default GravatarIcon;

const styles = StyleSheet.create({
  roundedProfileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  }
})
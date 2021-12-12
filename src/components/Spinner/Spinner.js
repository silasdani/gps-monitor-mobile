import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  Button
} from 'react-native';
import Colors from '../../utils/Colors';
import SpinnerBall from './SpinnerBall';

class Spinner extends Component {

  render() {
    return (
      <Animated.View style={styles.container}>
        <SpinnerBall />
        <Button title='dismiss' onPress={() => this.props.navigation.goBack()} />
      </Animated.View>
    );
  }
}

export default Spinner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    backgroundColor: Colors.spinnerOpacityBackgroundColor,
  },
});

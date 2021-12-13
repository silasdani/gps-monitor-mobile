import React, { Component } from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  Image,
  View
} from 'react-native';

class SpinnerBall extends Component {
  state = {
    spinValue: new Animated.Value(0)
  };
  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.spinValue, {
        toValue: 1,
        duration: 3000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }
  render() {
    const clockwiseSpin = {
      transform: [{
        rotate: this.state.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg']
        })
      }]
    };
    const trigonometricSpin = {
      transform: [{
        rotate: this.state.spinValue.interpolate({
          inputRange: [0, 1],
          outputRange: ['360deg', '0deg']
        })
      }]
    };
    return <View style={styles.imageContainer} >
      <Image source={require('./location-pin.png')} style={styles.pin} />
      <Animated.Image source={require('./INNERCIRCLE.png')} style={[styles.icon, clockwiseSpin]} />
      <Animated.Image source={require('./OUTERCIRCLE.png')} style={[styles.icon, trigonometricSpin]} />
    </View>;
  }
}

export default SpinnerBall;

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    width: 160,
    height: 70
  },
  pin: {
    position: 'absolute',
    width: 60,
    height: 60
  }
});
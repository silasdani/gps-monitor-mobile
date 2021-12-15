import React from 'react';
import {
  StyleSheet,
  Animated,
  Easing,
  Image,
  View
} from 'react-native';

export const clockwiseSpin = (spinValue) => ({
  transform: [{
    rotate: spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
  }]
});
export const trigonometricSpin = (spinValue) => ({
  transform: [{
    rotate: spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['360deg', '0deg']
    })
  }]
});
class SpinnerBall extends React.Component {
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
    return <View style={styles.imageContainer} >
      <Image source={require('./location-pin.png')} style={styles.pin} />
      <Animated.Image source={require('./INNERCIRCLE.png')} style={[styles.icon, clockwiseSpin(this.state.spinValue)]} />
      <Animated.Image source={require('./OUTERCIRCLE.png')} style={[styles.icon, trigonometricSpin(this.state.spinValue)]} />
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
    tintColor: 'aquamarine',
    position: 'absolute',
    width: 160,
    height: 70
  },
  pin: {
    tintColor: 'red',
    position: 'absolute',
    width: 60,
    height: 60
  }
});
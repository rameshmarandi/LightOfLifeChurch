import {View, Text, Image} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import theme from './src/utility/theme';
function AnimatedSlash() {
  return (
    <>
      <View
        style={{
          height: '100%',
          // getResHeight(250),
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.color.darkTheme,
        }}>
        <LottieView
          source={require('./src/assets/animationLoader/wave-animation.json')}
          autoPlay
          loop
          style={{
            height: '100%',
            width: '100%',
          }}
        />
        <Image
          source={theme.assets.church_logo_origianl}
          resizeMode="center"
          style={{
            height: '50%',
            width: '50%',
            position: 'absolute',
          }}
        />
      </View>
    </>
  );
}
const App = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <AnimatedSlash />
    </View>
  );
};

export default App;

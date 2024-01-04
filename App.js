import {View, Text, Image , StatusBar} from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import theme from './src/utility/theme';
function AnimatedSlash() {
  return (
    <>
      <View
        style={{
          height: '100%',
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
            position:"absolute",
            
          }}
        />
       
      </View>
    </>
  );
}
const App = () => {
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor(theme.color.darkTheme); // Set your desired background color

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
        <Text style={{
          width:"100%",
          alignSelf:"center",
          fontSize: 15,
          color:"white",
          justifyContent:"center",
          textAlign:"center",
          // fontFamily: 'Poppins Bold 700',
          position:"absolute",
          bottom:"5%",
          zIndex:9999
        }}>Light Of Life Chruch</Text>
      <AnimatedSlash />
    </View>
  );
};

export default App;

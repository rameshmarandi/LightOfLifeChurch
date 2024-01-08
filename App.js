import {View, Text, Image, SafeAreaView, StatusBar, LogBox} from 'react-native';
import React, {useEffect, useState} from 'react';
import LottieView from 'lottie-react-native';
import theme from './src/utility/theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RootNavigation from './src/Navigation';
import AllScreens from './src/Screens/index';
// import {SafeAreaView} from 'react-native-safe-area-context';
const Stack = createNativeStackNavigator();
LogBox.ignoreAllLogs(true);

const App = () => {
  StatusBar.setBarStyle('light-content');
  StatusBar.setBackgroundColor(theme.color.darkTheme); // Set your desired background color

  const [isLoading, setIsLoading] = useState(true);
  const [isLogedIn, setIsLogedIn] = useState(true);
  // const []
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {isLoading ? (
        <InitialRender />
      ) : (
        <AllNavContainer isLogedIn={isLogedIn} />
      )}
    </>
  );
};
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
            position: 'absolute',
          }}
        />
      </View>
    </>
  );
}

const InitialRender = () => {
  return (
    <>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
        }}>
        <Text
          style={{
            width: '100%',
            alignSelf: 'center',
            fontSize: 15,
            color: 'white',
            justifyContent: 'center',
            textAlign: 'center',
            position: 'absolute',
            bottom: '5%',
            zIndex: 9999,
          }}>
          Light Of Life Chruch
        </Text>
        <AnimatedSlash />
      </View>
    </>
  );
};

const AllNavContainer = props => {
  const {isLogedIn} = props;

  return (
    <>
      <NavigationContainer>
        <RootNavigation isLogedIn={isLogedIn} />
      </NavigationContainer>
    </>
  );
};
export default App;

import React, {useState} from 'react';

import AllScreens from '../Screens/index';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useIsFocused} from '@react-navigation/native';
const Tab = createBottomTabNavigator();

import {HomeStack, ProfileStack, SettingsStack} from './StackNav';
import screenOptions from './NavigationSettings';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {VectorIcon} from '../Components/VectorIcon';
import {getFontSize, getResHeight} from '../utility/responsive';
import theme from '../utility/theme';

let tabArrays = [
  {
    title: 'Home',
    icon: {
      type: 'Foundation',
      name: 'home',
    },
    routeNames: 'Home',
    component: HomeStack,
  },

  {
    title: 'Profile',
    icon: {
      type: 'FontAwesome5',
      name: 'user-alt',
    },
    routeNames: 'Profile',
    component: ProfileStack,
  },

  {
    title: 'Settings',
    icon: {
      type: 'Fontisto',
      name: 'player-settings',
    },
    routeNames: 'Settings',
    component: SettingsStack,
  },
];
const CustomTabBar = ({navigation}) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.tabBar}>
      {tabArrays.map((route, index) => {
        const isFocused = useIsFocused();

        const onPress = () => {
          setSelectedTab(index);
          navigation.navigate(route.routeNames);
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tabItem}>
            <VectorIcon
              type={route.icon.type}
              name={route.icon.name}
              color={
                selectedTab == index ? theme.color.white : theme.color.dimWhite
              }
              size={getFontSize(2.5)}
            />
            <Text
              style={{
                marginTop: getResHeight(1),
                // fontFamily: theme.font.bold,
                color:
                  selectedTab == index
                    ? theme.color.white
                    : theme.color.dimWhite,
              }}>
              {isFocused ? route.title : ''}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default function TabNav(props) {
  return (
    <>
      <Tab.Navigator
        tabBar={navigation => (
          <CustomTabBar
            {...navigation}
            initialRouteName={tabArrays[0].routeNames}
          />
        )}>
        {tabArrays.map((e, i) => {
          return (
            <Tab.Screen
              name={e.routeNames}
              component={e.component}
              options={screenOptions}
            />
          );
        })}
      </Tab.Navigator>
    </>
  );
}
const styles = StyleSheet.create({
  tabBar: {
    height: getResHeight(10),
    flexDirection: 'row',
    backgroundColor: 'lightgray',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.color.darkTheme,
    borderRadius: getResHeight(2),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: getResHeight(2),
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 5.5,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

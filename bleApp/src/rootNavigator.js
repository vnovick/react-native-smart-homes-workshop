import React from 'react';
import { 
  SplashScreen, 
  DevicesListScreen, 
  LightBulbScreen, 
  ServicesScreen,
  CharacteristicsScreen
} from './screens/';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

import { HEADER_TITLE, colors } from './theme';

export default createStackNavigator({
  SplashScreen: SplashScreen,
  Main: createBottomTabNavigator({
    Scanner: createStackNavigator({
      DevicesListScreen: DevicesListScreen,
      Services: ServicesScreen,
      Characteristics: CharacteristicsScreen,
    }, {
      navigationOptions: {
        initialRouteName: 'DevicesListScreen',
        headerStyle: {
          backgroundColor: colors.background,
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          ...HEADER_TITLE
        }
      }
    }),
    LightBulb: LightBulbScreen
  }, {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Scanner') {
          iconName = `bluetooth${focused ? '' : '-b'}`;
        } else {
          iconName = `lightbulb-o`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <FontAwesomeIcons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: colors.secondary,
      inactiveTintColor: colors.primary,
      inactiveBackgroundColor: colors.background,
      activeBackgroundColor: colors.background
    },
  })
}, {
  initialRouteName: 'SplashScreen',
  navigationOptions: {
    header: null
  }
});
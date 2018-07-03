import { HomeScreen, LightsScreen, SingleLightScreen } from './screens/';
import { createStackNavigator } from 'react-navigation';
import { HEADER_TITLE, colors } from './theme';

export default createStackNavigator({
  Home: HomeScreen,
  Lights: LightsScreen,
  Light: SingleLightScreen
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: colors.background,
    },
    headerTintColor: '#FFF',
    headerTitleStyle: {
      ...HEADER_TITLE
    }
  }
});
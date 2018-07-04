import { 
  SplashScreen, 
  DevicesListScreen, 
  LightBulbScreen, 
  ServicesScreen,
  CharacteristicsScreen
} from './screens/';
import { createStackNavigator } from 'react-navigation';
import { HEADER_TITLE, colors } from './theme';

export default createStackNavigator({
  SplashScreen: SplashScreen,
  DevicesListScreen: DevicesListScreen,
  Services: ServicesScreen,
  Characteristics: CharacteristicsScreen,
  LightBulbScreen: LightBulbScreen
}, {
  initialRouteName: 'SplashScreen',
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
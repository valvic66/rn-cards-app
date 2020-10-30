import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CardsScreen from "./src/screens/CardsScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cards: CardsScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Cards App"
    }
  }
);

export default createAppContainer(navigator);

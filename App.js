import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import CardsScreen from "./src/screens/CardsScreen";
import JsonApiScreen from "./src/screens/JsonApiScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cards: CardsScreen,
    JsonApi: JsonApiScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Cards App"
    }
  }
);

export default createAppContainer(navigator);

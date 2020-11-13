import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CardsScreen from './src/screens/CardsScreen';
import JsonApiScreen from './src/screens/JsonApiScreen';
import JsonItemScreen from './src/screens/JsonItemScreen';
import CardDetailScreen from './src/screens/CardDetailScreen';
import { Provider } from './src/context/CardsContext';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cards: CardsScreen,
    JsonApi: JsonApiScreen,
    JsonItem: JsonItemScreen,
    CardDetail: CardDetailScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Cards App"
    }
  }
);

const App = createAppContainer(navigator);
export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};

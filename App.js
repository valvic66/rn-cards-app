import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import CardsScreen from './src/screens/CardsScreen';
import JsonApiScreen from './src/screens/JsonApiScreen';
import JsonItemScreen from './src/screens/JsonItemScreen';
import { CardsProvider } from './src/context/CardsContext';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cards: CardsScreen,
    JsonApi: JsonApiScreen,
    JsonItem: JsonItemScreen
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
    <CardsProvider>
      <App />
    </CardsProvider>
  )
};

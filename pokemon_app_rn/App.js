import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/Home'
import PokemonScreen from './screens/Pokemon'


const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Pokemon: {screen: PokemonScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
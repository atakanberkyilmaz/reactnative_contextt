import ThemeContext from './src/context/ThemeContext';
import Router from "./src/Router"
import { ThemeContextProvider} from './src/context/ThemeContext'

function App() {
  return (
    <LangContext.Provider>
    <ThemeContextProvider>
      <Router/>
    {/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer> */}
    </ThemeContextProvider>
    </LangContext.Provider>
  );
}

export default App;

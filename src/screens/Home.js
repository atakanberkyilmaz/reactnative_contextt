import { View, Text, Button, StyleSheet } from 'react-native'
import React , {useContext} from 'react'
import Form from "../components/Form";
import List from "../components/List"
// import ThemeContext from '../context/ThemeContext';
// import LangContext from '../context/LangContext';

const Home = () => {
  const {loadData} = useUsers(); 


  useEffect(() => {
     
     loadData();
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then(res => res.json())
    // .then(data => setUsers(data));
  },[] )

    // const {theme, toggleTheme} = useContext(ThemeContext);
    // const {lang, setLang} = useContext(LangContext);

  return (
<View>
<Form/>
<List/>

{/* // style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }}>
//       <Text>Active Theme: {theme}</Text>
//       <Text>Active Language: {lang}</Text>
//       <Button
//       title = "Toggle Theme" 
//       onPress={toggleTheme} 
//       /> 
//       <Button
//         title= "Go to Settings"
//         onPress={()=> navigation.navigate("Settings")}
//       />

// <Text style = {{marginTop: 14}}>Change Language</Text>
//       <View style = {styles.buttons}>
//        <Button title = "tr-TR" onPress={() => setLang("tr-TR")}/>
//        <Button title = "en-US" onPress={() => setLang("en-US")}/>
//         </View>  */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});


export default Home;
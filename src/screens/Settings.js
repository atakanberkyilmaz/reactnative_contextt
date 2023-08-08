import { View, Text, Button, StyleSheet } from 'react-native'
import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
import LangContext from '../context/LangContext';

const Settings = () => {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const {lang, setLang} = useContext(LangContext)
  return (
    <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }}
    >
      <Text style = {styles.text}>Active Theme: {theme}</Text>
      <Text style= {styles.text}>Active Language: {lang}</Text>
      <Button
      title = "Toggle Theme" onPress={toggleTheme} 
      />
      <Text style = {{marginTop: 14}}>Change Language</Text>
      <View style = {styles.buttons}>
       <Button title = "tr-TR" onPress={() => setLang("tr-TR")}/>
       <Button title = "en-US" onPress={() => setLang("en-US")}/>

        </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
  buttons: {
    flexDirection:"row",
  }
})

export default Settings
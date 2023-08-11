import { FlatList, StyleSheet } from 'react-native'
import React from 'react'
import Item from "./Item"
import { useUsers } from '../context/UsersContext';
import Message from "./Message"

const List = () => {
    const {users, loading, error} = useUsers();
  if(loading){
    return <Loading message ="Loading.."/>;

  }
  if(error){
    return <Error message = {error} />;
  }
  return (
    <>
    {users.length === 0 && !loading && <Message message="No Item" /> }
    <Message   />
        <FlatList
    style= {styles.list}
    data = {users}
    keyExtractor={(item)=> item.id}
    renderItem={({item}) => <Item user = {user} />}
    
    />
    </>
  )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
                
    },
})

export default List
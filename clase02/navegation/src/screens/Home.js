import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import DynamicForm from "../components/DynamicForm";



function Home() {
    return(
        <View style={styles.contendor}>
            <Text style={styles.titulo} >Home</Text>
            
        <DynamicForm/>
        
        </View>
    )
}

const styles = StyleSheet.create({
             contendor: {
    flex: 1,                   
    justifyContent: 'center',  
    alignItems: 'center',      
    backgroundColor: '#f2f2f2' 
  },
  titulo: {
    fontSize: 32,               
    fontWeight: 'bold',
    marginBottom: 30,           
    color: '#000',              
  },
        })


export default Home;
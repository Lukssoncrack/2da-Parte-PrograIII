import React from "react";
import { View, Text, Pressable, StyleSheet} from 'react-native';


function Profile(props) {
    return(
        <View style={styles.contendor}>
            <Text style={styles.titulo}>Profile</Text>
                        <Pressable style={styles.boton}
                            onPress={ ()=> props.navigation.navigate("Login")}>
                            <Text  style={styles.text}>Desloguearse</Text>
            
                        </Pressable>

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
  boton: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
  },titulo: {
    fontSize: 32,               
    fontWeight: 'bold',
    marginBottom: 30,           
    color: '#000',              
  },
        })
export default Profile;
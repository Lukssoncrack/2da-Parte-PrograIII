import React, {Component} from "react";
import { View, Text, StyleSheet, TextInput  } from 'react-native';

import { Pressable } from "react-native";

class Register extends Component {
    constructor(props){
        super(props);
        this.state ={userName:"" , email: "", password: "" }
    }

    onSubmit() {
    console.log("Email:", this.state.email);
    console.log("Password:", this.state.password);
  }


    render(){
        return(
        <View style={styles.contendor}>
            <Text style={styles.titulo}>Register</Text>
            <Pressable  style={styles.boton}
                onPress={ ()=> this.props.navigation.navigate('Login')}>
                <Text style={styles.text} >Ir a Login o Ya tengo cuenta?</Text>
            </Pressable>
            <TextInput style={styles.field}
            keyboardType= 'default' 
            placeholder= 'userName'
            onChangeText={ text => this.setState({userName:text}) }
            value={this.state.userName} />
            <TextInput style={styles.field}
            keyboardType=' email-address' 
            placeholder= 'email'
            onChangeText={ text => this.setState({email:text}) }
            value={this.state.email} />
            <TextInput style={styles. field}
            keyboardType= 'default'
            placeholder= 'password' 
            secureTextEntry={true}
            onChangeText={ text => this. setState({password: text}) } value={this.state.password}/> 
         <Pressable onPress={() => this.onSubmit()}>
         <Text> Login </Text>
         </Pressable>    



            

        </View>
    )}
}

const styles = StyleSheet.create({
  contendor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 10,   
    marginTop: 20,          
  },

  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#000',
  },

  field: {
    height: 20,                
    paddingVertical: 15,       
    paddingHorizontal: 10,     
    borderWidth: 1,            
    borderColor: '#ccc',       
    borderStyle: 'solid',      
    borderRadius: 6,           
    marginVertical: 10,        
    width: '80%',             
    backgroundColor: '#fff',   
  },

  boton: {
    backgroundColor: '#28a745', 
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#28a745',
    alignItems: 'center',
    width: '80%',               
    marginVertical: 10,
  },

  text: {
    color: '#fff',              
    fontWeight: 'bold',
    textAlign: 'center',
  },
});






export default Register;
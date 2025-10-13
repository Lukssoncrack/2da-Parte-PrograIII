import React, { Component } from "react";
import {Pressable, Text, View, StyleSheet } from 'react-native';

class Contador extends Component{
    constructor(){
        super()
        this.state= {
            value: 0
        }
    }

    incrementador(){
        this.setState({
            value: this.state.value + 1
        })
    }

   
  
    render(){
        return(
            <View style={styles.central}>
            <Text> Cantidad de click: {this.state.value} </Text>
            <Pressable style={styles.boton} onPress={() => this.incrementador()}>
                        <Text style={styles.click}>click aqui para contar</Text>
            </Pressable>
            </View> 
            
        )
    }

}

const styles = StyleSheet.create({
    central: {
        marginTop: 5,
        alignItems: 'center',

    },
    boton: {
        padding: 7,
        backgroundColor:  "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderRadius: 4,
    }, 
    click: {
        fontWeight: "bold",
        
    }
})

export default Contador;
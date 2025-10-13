import React, { Component } from 'react';
import {Text,  Pressable, StyleSheet } from 'react-native';

class BotonSaludar extends Component{

    click(){
        console.log("Me clickearon")
}

    render(){
        return(
            <Pressable style={styles.boton} onPress={() => this.click()}>
                <Text style={styles.text}>Clickme</Text>
            </Pressable>
        )
    }
}

const styles = StyleSheet.create({
    boton: {
        padding: 10,
        backgroundColor: "lightgrey",
        marginBottom: 10,
        borderRadius: 4
    }, 
    text: {
        color: "black",
        fontWeight: "bold",
    }
})

export default BotonSaludar;
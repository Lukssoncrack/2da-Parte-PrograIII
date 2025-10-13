import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import BotonSaludar from "../components/BotonSaludar";
import Contador from "../components/Contador";

function Home() {
    return(
        <View style={styles.centrado}>
            <Text>Hola mundo!</Text>
            <BotonSaludar/>
            <Contador/>

        </View>
    )
}

const styles = StyleSheet.create({
    centrado: {
         alignItems: "center",
         padding: 10,
        
        
    },
   
    


})

export default Home;
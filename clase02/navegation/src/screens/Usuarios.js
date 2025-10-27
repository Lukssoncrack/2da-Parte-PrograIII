import React, { Component } from "react";
import { FlatList } from "react-native";
import { View, Text } from "react-native";
import { auth, db } from "../firebase/config";


class Usuarios extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []
        };
    }

    componentDidMount() {
        console.log("hola")
        db.collection('users').onSnapshot(
            docs => {
                let usuarios = []; 
                console.log(docs)
                docs.forEach(doc => {
                    console.log(doc);
                    
                    usuarios.push({
                        id: doc.id,
                        data: doc.data()
                    })
                    this.setState({
                        users: usuarios,
                        loading: false
                    },
                        console.log(this.state.users))
                })

            }
        )
    }



    render() {
        console.log(this.state.users);
        
        return (
            <View>
                <FlatList
                    data={this.state.users}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => <Text>{item.data.email}</Text>}
                />
            </View>
        )
    }
}


export default Usuarios;
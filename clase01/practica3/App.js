import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ProductList from './src/screens/ProductsList';


export default function App() {
  return (
    <View>
      <Text style={styles.principal}>Probando Flats Lists!</Text>
      <ProductList/>
    </View>
  );
}

const styles = StyleSheet.create({
  principal: {
    fontSize: 24,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

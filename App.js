import React, { useState } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


import api from "./src/services/api";

export default function App() {
const [cep, setCep] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text}>Digite o cep desejado</Text>
        <TextInput
          style={styles.input}
          placeholder="Ex: 37400000"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
        >
          
        </TextInput>
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#1d75cd'}]}>
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.botao, { backgroundColor: '#cd3e1d'}]}>
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.resultado}>
        <Text style={styles.itemText}>CEP: 37400000</Text>
        <Text style={styles.itemText}>Logradouro: 37400</Text>
        <Text style={styles.itemText}>Bairro: Cidade inteira</Text>
        <Text style={styles.itemText}>Cidade: Campanha</Text>
        <Text style={styles.itemText}>Estado: Minas Gerais</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  text:{
    marginTop: 25,
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 'bold',
  },
  input:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 5,
    width: "90%",
    padding: 10,
    fontSize: 18,
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: "space-around"
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  botaoText:{
    fontSize: 22,
    color: "#faf9f9"
  },
  resultado:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemText:{
    fontSize: 22,
  }
})

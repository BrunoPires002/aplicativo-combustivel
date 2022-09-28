import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function App() {

  const [gasolina, setGasolina] = useState()
  const [alcool, setAlcool] = useState()
  const [resposta, setResposta] = useState()
  const [imgGasolina, setImg] = useState()

  // operadores aritméticos + - * / %
  // operadores relacionais > < >= <= == !-
  // operadores lógicos && || !

  //Exemplo 1

  function calculoCombustivel(){
    const result = (gasolina / alcool)
    return result
  }

  function combustivelViavel(){
    if(calculoCombustivel() > 0.7)
    {
      
      setImg(require('./.expo/img/alcool-gasolina.png'))
      setResposta('Abasteça com alcool')
    }
    else{
      setImg(require('./.expo/img/gasolina.png'))
      setResposta ('Abasteça com gasolina')
    }
  }

  return (

      <View style={styles.container}>
        <View style={styles.titulo}>
          <Text>Escolha de combustivel</Text>
        </View>
        <View style={{margin:15}}>
              <Text> Gasolina:  </Text>          
              <TextInput              
                style={styles.caixaDeTexto}
                placeholder='Preço da gasolina'
                autoFocus={true}
                keyboardType={'numeric'}

                onChangeText = {Double =>setGasolina(Double)}
              />            
        </View>   

        <View style={{margin:15}}>
              <Text> Álcool:  </Text>          
              <TextInput              
                style={styles.caixaDeTexto}
                placeholder='Preço do Álcool'
                autoFocus={true}
                keyboardType={'numeric'}

                onChangeText = {Double =>setAlcool(Double)}
              />            
        </View>

        <View style={{margin:15}}>
            <Button title={'Qual o mais viável?'} onPress={() => combustivelViavel()}
            />
            <Text>{resposta}</Text>
            <Image
              style={styles.imagem}
              source={imgGasolina}
            />
        </View>
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e9e9e9',
  },
  titulo: {
    fontSize: 25,
    color:'#008584',
  },
  imagem: {
    width: 200,
    height: 100,
  },
  caixaDeTexto: {
    backgroundColor: '#1E90FF',
  }
});

import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native';

const gerarNovaFrase = () => {
  let frases = Array();
  let fraseEscolhida = null;
  let numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  frases[0] = 'Entregue o seu caminho ao Senhor; confie nele, e ele agirá: (Salmos 37:5)';
  frases[1] = 'Deus lhe ajuda a carregar os fardos que são pesados demais para você. Ele está com você para lhe sustentar e fortalecer. Entregue seus problemas a Deus e ele vai lhe ajudar. (Salmo 68.19)';
  frases[2] = 'Deus está no controle de sua vida. Ele tem planos bons para você. O dia de hoje pode ser difícil mas no fim das lutas Deus tem bênçãos preparadas. Não tenha medo! (Salmo 16.5)';
  frases[3] = 'Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará". (Deuteronômio 31:6)';
  frases[4] = 'Não me assustam os milhares que me cercam. (Salmos 3:6)';

  fraseEscolhida = frases[numeroAleatorio];
  Alert.alert('Mensageiro',fraseEscolhida);
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Image source={require('./imgs/logo.png')} />

        <TouchableOpacity 
        style={styles.botao}
        onPress={gerarNovaFrase}
        >
          <Text style={styles.textoBotao}>Tirar versículo</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});

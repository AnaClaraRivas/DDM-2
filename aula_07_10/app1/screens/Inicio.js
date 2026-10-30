
import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  Pressable,
  Alert
} from 'react-native';

import styles from '../appStyles';

export default function Inicio() {
  const [sonho, setSonho] = useState('');

  function enviarSonho() {
    if (!sonho.trim()) {
      Alert.alert('Atenção', 'Escreva seu sonho primeiro!');
      return;
    }

    Alert.alert('Que lindo!', 'Nunca desista dos seus sonhos!');
    setSonho('');
  }

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>LA LA LAND</Text>
        <Text style={styles.subtitulo}>
          Uma história de sonhos, música e amor
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Sobre o filme</Text>

        <Text style={styles.texto}>
          La La Land conta a história de Mia e Sebastian,
          dois jovens que possuem grandes sonhos.
        </Text>

        <Text style={styles.texto}>
          Mia quer ser atriz e Sebastian quer ser músico.
          Juntos, eles enfrentam desafios enquanto tentam
          realizar seus sonhos.
        </Text>

        <Text style={styles.texto}>
          Ao chegar em Los Angeles, Sebastian conhece Mia.
          Os dois se apaixonam enquanto perseguem fama e sucesso.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Seu sonho</Text>

        <TextInput
          style={styles.input}
          placeholder="Escreva aqui..."
          value={sonho}
          onChangeText={setSonho}
        />

        <Pressable style={styles.botao} onPress={enviarSonho}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </Pressable>
      </View>

      <Image
        source={require('../lalaland.jpg')}
        style={styles.imagem}
      />

      <Text style={styles.footer}>★ LA LA LAND ★</Text>

    </ScrollView>
  );
}

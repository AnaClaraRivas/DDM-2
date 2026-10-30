
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import styles from '../appStyles';

export default function Sobre() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>SOBRE O FILME</Text>
        <Text style={styles.subtitulo}>
          Conheça a produção de La La Land
        </Text>
      </View>

      <View style={styles.card}>

        <Image
          source={require('../lalaland.jpg')}
          style={styles.imagem}
        />

        <Text style={styles.tituloSecao}>
          Informações gerais
        </Text>

        <Text style={styles.informacao}>
          <Text style={styles.destaque}>Título: </Text>
          La La Land
        </Text>

        <Text style={styles.informacao}>
          <Text style={styles.destaque}>Lançamento: </Text>
          2016
        </Text>

        <Text style={styles.informacao}>
          <Text style={styles.destaque}>Direção: </Text>
          Damien Chazelle
        </Text>

        <Text style={styles.informacao}>
          <Text style={styles.destaque}>Gênero: </Text>
          Musical, romance e drama
        </Text>

        <Text style={styles.informacao}>
          <Text style={styles.destaque}>Elenco: </Text>
          Emma Stone e Ryan Gosling
        </Text>

      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>
          Uma história sobre sonhos
        </Text>

        <Text style={styles.texto}>
          La La Land apresenta os desafios de perseguir
          os próprios sonhos e mostra como as escolhas,
          o amor e as oportunidades podem transformar
          nossas vidas.
        </Text>
      </View>

      <Text style={styles.footer}>
        ★ LA LA LAND ★
      </Text>

    </ScrollView>
  );
}

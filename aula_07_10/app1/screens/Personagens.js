
import React from 'react';

import {
  View,
  Text,
  ScrollView,
  Image
} from 'react-native';

import styles from '../appStyles';

export default function Personagens() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>PERSONAGENS</Text>
        <Text style={styles.subtitulo}>
          Conheça os protagonistas
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../mialalaland.jpeg')}
          style={styles.imagemPersonagem}
        />

        <Text style={styles.nomeMia}>MIA DOLAN</Text>

        <Text style={styles.texto}>
          Interpretada por Emma Stone, Mia é uma jovem
          apaixonada por atuação que sonha em se tornar
          uma grande atriz em Hollywood.
        </Text>

        <Text style={styles.texto}>
          Apesar das dificuldades e das rejeições nos testes,
          ela continua acreditando em seu talento.
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={require('../seblalaland.jpeg')}
          style={styles.imagemPersonagem}
        />

        <Text style={styles.nomeSeb}>SEBASTIAN WILDER</Text>

        <Text style={styles.texto}>
          Interpretado por Ryan Gosling, Sebastian é
          um pianista apaixonado por jazz.
        </Text>

        <Text style={styles.texto}>
          Seu maior sonho é abrir um clube de jazz
          e preservar a música que tanto ama.
        </Text>
      </View>

    </ScrollView>
  );
}

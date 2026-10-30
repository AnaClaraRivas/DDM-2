
import React from 'react';

import {
  View,
  Text,
  ScrollView
} from 'react-native';

import styles from '../appStyles';

export default function Musicas() {

  const musicas = [
    {
      nome: 'City of Stars',
      descricao: 'Uma das músicas mais marcantes do filme.'
    },
    {
      nome: 'Another Day of Sun',
      descricao: 'A música que abre o filme.'
    },
    {
      nome: 'Audition',
      descricao: 'Uma reflexão emocionante sobre sonhos.'
    },
    {
      nome: 'Mia & Sebastian’s Theme',
      descricao: 'O tema instrumental dos protagonistas.'
    },
    {
      nome: 'Someone in the Crowd',
      descricao: 'Uma canção sobre oportunidades e esperança.'
    }
  ];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.titulo}>TRILHA SONORA</Text>
        <Text style={styles.subtitulo}>
          A música também conta histórias
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>
          Músicas do filme
        </Text>

        {musicas.map((musica, index) => (
          <View key={index} style={styles.musicaItem}>

            <View style={styles.musicaNumero}>
              <Text style={styles.musicaNumeroTexto}>
                {index + 1}
              </Text>
            </View>

            <View style={styles.musicaInfo}>
              <Text style={styles.nomeMusica}>
                {musica.nome}
              </Text>

              <Text style={styles.textoMusica}>
                {musica.descricao}
              </Text>
            </View>

          </View>
        ))}
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>
          Curiosidade musical
        </Text>

        <Text style={styles.texto}>
          A trilha sonora de La La Land mistura jazz,
          música instrumental e canções originais,
          contribuindo para contar a história dos personagens.
        </Text>
      </View>

    </ScrollView>
  );
}

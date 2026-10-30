
import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';

import Inicio from './screens/Inicio';
import Personagens from './screens/Personagens';
import Musicas from './screens/Musicas';
import Sobre from './screens/Sobre';

import styles from './appStyles';

export default function App() {
  const [tela, setTela] = useState('Inicio');

  const paginas = {
    Inicio: <Inicio />,
    Personagens: <Personagens />,
    Musicas: <Musicas />,
    Sobre: <Sobre />
  };

  const navegacao = [
    { nome: 'Inicio', icone: '⌂' },
    { nome: 'Personagens', icone: '♙' },
    { nome: 'Musicas', icone: '♫' },
    { nome: 'Sobre', icone: 'ⓘ' }
  ];

  return (
    <View style={styles.app}>
      <View style={styles.conteudo}>
        {paginas[tela]}
      </View>

      <View style={styles.menu}>
        {navegacao.map((item) => (
          <Pressable
            key={item.nome}
            style={styles.menuItem}
            onPress={() => setTela(item.nome)}
          >
            <Text
              style={[
                styles.menuIcone,
                tela === item.nome && styles.menuAtivo
              ]}
            >
              {item.icone}
            </Text>

            <Text
              style={[
                styles.menuTexto,
                tela === item.nome && styles.menuAtivo
              ]}
            >
              {item.nome}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

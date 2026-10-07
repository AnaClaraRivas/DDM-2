import { 
  Text, 
  View, 
  ScrollView, 
  TextInput, 
  Button,
  Image
} from 'react-native';

import styles from './app.css';

export default function App() {
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
         Ao chegar em Los Angeles o pianista de jazz Sebastian (Ryan Gosling) conhece a atriz iniciante Mia (Emma Stone) e os dois se apaixonam perdidamente. Em busca de oportunidades para suas carreiras na competitiva cidade, os jovens tentam fazer o relacionamento amoroso dar certo enquanto perseguem fama e sucesso.
         </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Personagens</Text>

        <Text style={styles.nome}>Mia</Text>
        <Text style={styles.texto}>
          Uma jovem que sonha em ser atriz.
        </Text>

        <Text style={styles.nome_seb}>Sebastian</Text>
        <Text style={styles.texto}>
          Um músico apaixonado por jazz.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.tituloSecao}>Seu sonho</Text>

        <TextInput
          style={styles.input}
          placeholder="Escreva aqui..."
        />

        <Button
          title="Enviar"
          color="#6C4AB6"
          onPress={() => ('')}
        />
      </View>

        <Image 
        source={require('./lalaland.jpg')} 
        style={styles.imagem}
        />

      <Text style={styles.footer}>
        ★ LA LA LAND ★
      </Text>

    </ScrollView>
  );
}




import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';
export default function App() {
  return (
    <View style={styles.container}>

      <ScrollView>
        <Text style={styles.texto}>
          She-Ra é uma personagem conhecida por sua força, coragem e espírito de liderança. Sua história apresenta um universo repleto de magia, aventuras, amizades e batalhas entre forças que lutam pelo destino de Etheria. {'\n\n'} A personagem principal é Adora, uma jovem que cresceu acreditando que estava fazendo a coisa certa ao servir à Horda. Durante grande parte de sua vida, Adora foi treinada para ser uma guerreira e acreditava que a Horda estava protegendo o mundo. Porém, tudo muda quando ela começa a descobrir que existem muitas coisas sobre seu passado e sobre a verdadeira natureza da Horda que nunca lhe foram contadas. {'\n\n'} Durante uma de suas aventuras, Adora encontra uma espada misteriosa. Essa espada possui uma ligação muito importante com seu destino. Quando utiliza a espada e diz as palavras necessárias para ativar seu poder, Adora se transforma em She-Ra, uma poderosa guerreira destinada a proteger Etheria. {'\n\n'} A transformação de Adora em She-Ra representa muito mais do que simplesmente ganhar poderes. Ela simboliza o momento em que Adora começa a escolher seu próprio caminho. Em vez de continuar seguindo ordens sem questionar, ela passa a pensar por si mesma e a descobrir quais são seus próprios valores. {'\n\n'} Etheria é um mundo cheio de lugares mágicos, reinos diferentes, criaturas fantásticas e personagens com histórias próprias. Ao longo da aventura, She-Ra conhece diversas pessoas que passam a fazer parte de sua vida. Entre elas estão Glimmer e Bow, que se tornam grandes amigos e companheiros de batalha. {'\n\n'} Glimmer é uma princesa com poderes mágicos e uma personalidade forte. Ela também possui uma grande responsabilidade relacionada ao seu reino e à sua família. Sua amizade com Adora se torna importante porque as duas precisam aprender a confiar uma na outra, mesmo quando possuem opiniões diferentes. {'\n\n'} Bow é um dos grandes companheiros de She-Ra. Ele é inteligente, otimista, habilidoso e costuma tentar ajudar seus amigos mesmo nas situações mais difíceis. Sua presença também mostra que uma pessoa não precisa possuir poderes mágicos para ser importante em uma equipe. {'\n\n'} Um dos elementos mais marcantes da história é a relação entre Adora e Catra. As duas cresceram juntas dentro da Horda e possuem uma história complicada. Apesar de terem sido amigas e muito próximas, suas escolhas acabam colocando as duas em lados diferentes do conflito. {'\n\n'} Catra é uma personagem extremamente importante porque sua história mostra sentimentos como abandono, insegurança, raiva, medo e desejo de ser reconhecida. Ela muitas vezes toma decisões que acabam causando problemas, mas sua trajetória também mostra como as experiências de uma pessoa podem influenciar suas escolhas. {'\n\n'} A relação entre She-Ra e Catra é uma das partes mais emocionantes da história. As duas possuem uma conexão construída desde a infância, e isso faz com que seus conflitos tenham um significado muito maior. Elas não são simplesmente adversárias: existe entre elas uma história de amizade, sentimentos, mágoas e escolhas. {'\n\n'} Outro ponto importante é a ideia de amizade. She-Ra não consegue enfrentar todos os problemas sozinha. Ao longo da história, ela aprende que confiar nas pessoas ao seu redor pode ser tão importante quanto possuir força e poderes. {'\n\n'} A Princesa do Poder também representa coragem. Ser corajosa não significa não sentir medo. Muitas vezes, Adora sente dúvidas e insegurança, mas mesmo assim continua tentando fazer aquilo que acredita ser correto. {'\n\n'} A espada de She-Ra também possui grande importância simbólica. Ela está diretamente relacionada à transformação de Adora e à sua identidade como She-Ra. A espada representa poder, responsabilidade e também a descoberta de quem Adora realmente é. {'\n\n'} Durante sua jornada, Adora precisa aprender que ser uma heroína não significa simplesmente vencer batalhas. Ela precisa compreender suas próprias escolhas, aceitar seus erros, proteger seus amigos e enfrentar situações que muitas vezes parecem impossíveis. {'\n\n'} A história de She-Ra também apresenta diferentes princesas e personagens que possuem habilidades próprias. Cada uma delas pode contribuir de uma maneira diferente para a luta por Etheria. Isso reforça uma das principais mensagens da série: pessoas diferentes podem trabalhar juntas e formar uma equipe muito forte. {'\n\n'} Além das batalhas, a história também mostra momentos de amizade, diversão e crescimento pessoal. Os personagens mudam conforme as experiências acontecem, aprendendo com seus erros e descobrindo novas maneiras de lidar com seus sentimentos. {'\n\n'} She-Ra se tornou uma personagem marcante justamente porque sua história combina aventura e fantasia com temas relacionados à identidade, amizade, confiança, responsabilidade e superação. {'\n\n'} No final, a jornada de Adora mostra que a verdadeira força não está apenas em seus poderes. A força de She-Ra também está nas pessoas que ela ama, nas escolhas que faz e na coragem de continuar lutando mesmo quando tudo parece estar perdido. {'\n\n'} She-Ra é, portanto, uma personagem que representa transformação e crescimento. Adora começa sua jornada tentando entender seu lugar no mundo e termina aprendendo que pode escolher quem deseja ser. Sua história mostra que ninguém precisa seguir para sempre o caminho que outras pessoas escolheram. {'\n\n'} A mensagem de She-Ra pode ser resumida na ideia de que amizade, confiança e coragem podem transformar pessoas e mudar o mundo ao redor delas. Etheria é um lugar cheio de desafios, mas também é um lugar onde diferentes pessoas podem encontrar seu próprio valor e aprender que não precisam enfrentar tudo sozinhas.
 
         </Text>
      </ScrollView>

            <Text style={styles.instrucao}> Open up App.js to start working on your app!</Text>
      <TextInput style={styles.input} placeholder='teste'></TextInput>
      <Button onPress={''} title ='Botão'/>
    </View>
  );
}

  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffabc4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  texto: {
    fontSize: 17,
    color: '#4a2040',
    lineHeight: 28,
    textAlign: 'justify',
    backgroundColor: '#ffe8f1',
    padding: 20,
    borderRadius: 20,
  },

  instrucao: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6b2458',
    marginTop: 15,
    marginBottom: 8,
  },

  input: {
    width: '90%',
    height: 45,
    backgroundColor: '#ffffff',
    borderWidth: 2,
    borderColor: '#a83d83',
    borderRadius: 12,
    paddingHorizontal: 15,
    marginBottom: 12,
    color: '#4a2040',
  },
});


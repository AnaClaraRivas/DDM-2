
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  app: {
    flex: 1,
    backgroundColor: '#EDE7F6',
  },

  conteudo: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: '#EDE7F6',
  },

  header: {
    backgroundColor: '#5E3A8C',
    padding: 40,
    paddingTop: 55,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  titulo: {
    color: '#FFD84D',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 2,
    textAlign: 'center',
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 15,
    marginTop: 10,
    textAlign: 'center',
  },

  card: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 20,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },

  tituloSecao: {
    color: '#5E3A8C',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  texto: {
    color: '#333333',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 15,
  },

  input: {
    backgroundColor: '#F5F1FA',
    borderWidth: 1,
    borderColor: '#B9A5D6',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    color: '#333333',
  },

  botao: {
    backgroundColor: '#6C4AB6',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },

  textoBotao: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  imagem: {
    width: '95%',
    height: 200,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    resizeMode: 'cover',
    alignSelf: 'center',
  },

  imagemPersonagem: {
    width: '100%',
    height: 190,
    borderRadius: 10,
    marginBottom: 15,
    resizeMode: 'cover',
  },

  nomeMia: {
    color: '#3977B8',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  nomeSeb: {
    color: '#B83939',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  musicaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5DCEF',
  },

  musicaNumero: {
    width: 38,
    height: 38,
    borderRadius: 20,
    backgroundColor: '#5E3A8C',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },

  musicaNumeroTexto: {
    color: '#FFD84D',
    fontWeight: 'bold',
    fontSize: 16,
  },

  musicaInfo: {
    flex: 1,
  },

  nomeMusica: {
    color: '#5E3A8C',
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 4,
  },

  textoMusica: {
    color: '#555555',
    fontSize: 14,
    lineHeight: 20,
  },

  informacao: {
    color: '#333333',
    fontSize: 16,
    marginBottom: 13,
    lineHeight: 23,
  },

  destaque: {
    color: '#5E3A8C',
    fontWeight: 'bold',
  },

  footer: {
    textAlign: 'center',
    backgroundColor: '#5E3A8C',
    color: '#FFD84D',
    padding: 25,
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
  },

  menu: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingVertical: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: '#D8CBE9',
    elevation: 10,
  },

  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuIcone: {
    fontSize: 23,
    color: '#A99BB9',
    marginBottom: 3,
  },

  menuTexto: {
    fontSize: 11,
    color: '#A99BB9',
    fontWeight: '500',
  },

  menuAtivo: {
    color: '#5E3A8C',
    fontWeight: 'bold',
  },

});

export default styles;

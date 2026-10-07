
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#EDE7F6',
  },

  header: {
    backgroundColor: '#5E3A8C',
    padding: 45,
    alignItems: 'center',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  titulo: {
    color: '#FFD84D',
    fontSize: 36,
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  subtitulo: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
  },

  card: {
    backgroundColor: '#FFFFFF',
    margin: 15,
    padding: 20,
    borderRadius: 15,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
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

  nome_mia: {
    color: '#3977B8',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
  },

    nome_seb: {
    color: '#b83939',
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 5,
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

  footer: {
    textAlign: 'center',
    backgroundColor: '#5E3A8C',
    color: '#FFD84D',
    padding: 25,
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 5,
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

});

export default styles;



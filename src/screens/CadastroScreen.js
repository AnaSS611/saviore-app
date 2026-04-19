import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';// Importa o hook useState para controlar estados
import api from '../services/api'; // Importa a configuração da API (provavelmente axios configurado)

export default function CadastroScreen() {

  // Estados para armazenar os dados digitados pelo usuário
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  // Função assíncrona chamada ao clicar no botão
  async function handleCadastro() {
    try {
      // Faz uma requisição POST para o backend enviando os dados do usuário
      const response = await api.post('/registrar', { 
        nome: nome,       
        email: email,      
        password: senha  // envia a senha (diferente do back)
      });

      // Mostra no console a resposta da API
      console.log(response.data);
      alert('Conta criada com sucesso!');

    } catch (error) {
      console.log(error);

      alert('Erro ao cadastrar');
    }
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Nome"
        style={styles.input}
        value={nome}
        onChangeText={setNome} // atualiza o estado nome
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail} // atualiza o estado email
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry // oculta os caracteres digitados
        value={senha}
        onChangeText={setSenha} // atualiza o estado senha
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
    justifyContent: 'center',
    padding: 20
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center'
  },

  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },

  button: {
    backgroundColor: '#FF9430',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
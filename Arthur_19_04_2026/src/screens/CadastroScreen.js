import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import api from '../services/api';

export default function CadastroScreen({navigation}) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

async function handleCadastro() {
  try {
    const response = await api.post('/registrar', {
      nome: nome,
      email: email,
      password: senha
    });

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
        onChangeText={setNome}
      />

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button} onPress={handleCadastro}>
        <Text style={styles.buttonText}>Criar Conta</Text>
      </TouchableOpacity>

      <Pressable style={styles.login} onPress={ () => navigation.navigate("Login")}><Text style={styles.troca}> Já tenho um cadastro </Text></Pressable>

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
    fontSize: 40,
    marginBottom: 20,
    textAlign: 'center'
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    fontSize: 20,
  },
  button: {
    backgroundColor: '#FF9430',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },
  login:{
    top: 30,
  },
  troca:{
    textDecorationLine: 'underline',
    textAlign:'center',
    fontSize: 15,
  }

});
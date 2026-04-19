import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

export default function ProdutosScreen({navigation}) {
  return (
    <View style={css.container}>

      <Text style={css.titulo}>Produtos</Text>

      <View style={css.botoes}>
        <TouchableOpacity style={css.botao}> 
        Almoço
        </TouchableOpacity>

        <TouchableOpacity style={css.botao}> 
        Bebidas
        </TouchableOpacity>
      </View>



    </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F0',
  },
  titulo:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 40,
  },
  botoes:{
    backgroundColor: '#FF9430',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },
  botao:{
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  }
});
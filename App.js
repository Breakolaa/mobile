import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {

const [noticia, setNoticia] = useState([
  {nome: 'Inteligencia artificial é inteligente', key: 1},
  {nome: 'Processadores estão em alta', key: 2},
  {nome: 'Tesla cria vagas de estagio pelo mundo', key: 3},
  {nome: 'Catastrofe Digital!!!!!', key: 4},
])

const [pesquisa, setPesquisa] = useState('');

const [botao, setBotao] = useState(true);
const [ativar, setAtivar] = useState(true);
const [text, setTexto] = useState('FAZER PESQUISA APARECER');
const [aparecer, setAparecer] = useState([]);

  const handleGenerate = () => {
    setAtivar(!ativar);

    if(ativar==false){
      setTexto('ATIVAR')
    } else {
      setTexto('DESATIVAR')
    }

    setBotao(!botao);

    const complemento = `${pesquisa}`;
    setAparecer([...aparecer, complemento]);
  }

  const sugir = ({item}) => (
    <View style={styles.view2}>
      <Text style={styles.texto1}>{item}</Text>

    </View>
  );

  return (
    <View style={styles.container}>
        <View style={styles.view1}>
      <AntDesign name="search1" size={24} color="black" />
        <TextInput
        placeholder= 'Pesquisar' 
        value={pesquisa}
        onChangeText={setPesquisa}
        />
        </View>
      <View style={styles.imgv}>
      <Image 
      source={require('./imgs/tec.jpg')} 
      style={styles.img}
      />
      </View>
      <View style={styles.itemv}>
          <FlatList
          numColumns={1}
          keyExtractor={(item) => item.key}
          data={noticia}
          horizontal={true}
          renderItem={({item}) => (
            <TouchableOpacity>
              <Text style={styles.item}>{item.nome}</Text>
            </TouchableOpacity>
          )}
          />
      </View>
      <View style={styles.cx1}>
        <View style={styles.cx2}>
        <FontAwesome name="newspaper-o" size={24} color="black" />
        </View>
        <View style={styles.cx3}><FontAwesome5 name="newspaper" size={24} color="black" />
        </View>
      </View>
      <View style={styles.cx4}>
        <Text>Sua pesquisa irá aparecer aqui:</Text>
      </View>
      <View style={styles.buttonv}>
      <Button
        title={text}
        color= '#0C2D48'
        onPress={handleGenerate}
      />
      </View>
      <FlatList data={aparecer} keyExtractor={(item) => item.toString()} renderItem={aparecer}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    paddingLeft: '10%',
    backgroundColor: '#145DA0',
  },
 
  img: {
    width: 320,
    height: 195,
  },
  imgv: {
    marginTop: 32,
  },
  item: {
    marginLeft: 10,
    color: 'red',
    backgroundColor: 'lightgray',
    borderRadius: 10,
    padding: 5,
  },
  itemv:{
    width: 320,
    height: 50,
    padding: 10,
    backgroundColor: '#0C2D48',
  },
  cx1: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 320,

  },
  cx2: {
    width: 150,
    height: 100,
    backgroundColor: '#B1D4E0',
   
  },
  cx3: {
    marginTop:1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 150,
    height: 100,
    backgroundColor: '#B1D4E0',
  },
  cx4: {
    marginTop: 35,
    width: 320,
    height: 100,
    backgroundColor: '#B1D4E0',
  },
  buttonv: {
    marginTop: 35,
    width: 320,
  },

  view1: {
    borderWidth: 1,
    width: 320,
    height: 45,
    borderRadius: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:'#B1D4E0',
    marginTop: 55,
    borderColor: 'black',
  },

  view2: {
   borderWidth: 1,
   borderColor: 'black',
   borderRadius: 5,
   padding: 10,

  },

  texto1: {
  fontSize: 16,

  },

});

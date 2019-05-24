import React, { useEffect, useState } from 'react';
import {Platform, StyleSheet, Text, View, Image, FlatList} from 'react-native';
import Card from './components/Card';

const App = () => {

  const [poke, setPoke] = useState([]);

  useEffect(()=>{
    getData();
  }, [])

  const getData = async ()=>{
    const res = await fetch('https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json');
    const data = await res.json();
    setPoke(data.pokemon);
    console.log(data.pokemon);
  }

  return (
    <View style={{flex:1, justifyContent:'center'}}>
      <FlatList 
        data={poke}
        renderItem={({item})=><View style={styles.cardStyle}><Card name={item.name} image={item.img} /></View>}
        keyExtractor={(item)=>item.num}
        numColumns={2}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  cardStyle: {
    flex:1,
    flexDirection: 'column',
    borderWidth:0.1, 
    margin:5,
    elevation:3, 
    height:150,
    padding:5
  }
});

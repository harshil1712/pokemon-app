import React, { useEffect, useState } from 'react';
import {StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import Card from '../components/Card';

const HomeScreen = ({navigation}) => {

    

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
        renderItem={({item})=><View style={styles.cardStyle}><TouchableOpacity onPress={()=>{navigation.navigate('Pokemon',{
            name:item.name,
            image:item.img
        })}}><Card name={item.name} image={item.img} /></TouchableOpacity></View>}
        keyExtractor={(item)=>item.num}
        numColumns={2}
      />
    </View>
  );
}

HomeScreen.navigationOptions =({navigation})=> ({
    title: 'Pokemon App',
    headerStyle: {
        backgroundColor: '#03A9F4',
    },
    headerTitleStyle: {
        fontWeight: 'normal',
        color:'#fff',
    },
});

export default HomeScreen;

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

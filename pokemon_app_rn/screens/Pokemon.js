import  React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'

export default PokemonScreen = ({navigation})=> {
    
    const name = navigation.getParam('name')
    const image = navigation.getParam('image')
    const pokeHeight = navigation.getParam('pokeHeight')
    const pokeWeight = navigation.getParam('pokeWeight')
    const types = navigation.getParam('types')
    const weakness = navigation.getParam('weakness')
    const nextEvolution = navigation.getParam('nextEvolution')
    
    return (
        <View style={{backgroundColor: '#00BCD4', flex:1, flexDirection:'column'}}>
            <View style={styles.card}>
                <Image source={{uri:`${image}`}} style={{height:175, width:175, marginTop:-100}} />
                <Text style={{fontSize:20, color:'black', fontWeight:'bold'}}>{name.toUpperCase()}</Text>
                <Text style={{marginTop:10, color:'#000'}}>Height: {pokeHeight}</Text>
                <Text style={{marginTop:10, color:'#000'}}>Weight: {pokeWeight}</Text>
                <Text style={styles.textBold}>Types</Text>
                <View style={styles.labelView}>
                    {types.map(type=>(<Text style={styles.typeLabel} key={type}>{type}</Text>))}
                </View>
                <Text style={styles.textBold}>Weakness</Text>
                <View style={styles.labelView}>
                    {weakness.map(type=>(<Text style={styles.weakLabel} key={type}>{type}</Text>))}
                </View>
                <Text style={styles.textBold}>Next Evolution</Text>
                <View style={styles.labelView}>
                    {nextEvolution.map(type=>(<Text style={styles.evoLabel} key={type.num}>{type.name}</Text>))}
                </View>
            </View>
        </View>
    )
}

PokemonScreen.navigationOptions =({navigation})=> ({
    headerStyle: {
        backgroundColor: '#00BCD4',
        elevation:0
    },
    headerTintColor: '#fff',
});

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff', 
        height:400, 
        width:340, 
        alignSelf:'center', 
        borderRadius:10, 
        marginTop:100, 
        elevation:5,
        alignItems: 'center'
    },
    textBold:{
        fontWeight:'bold',
        color:'#000',
        padding:10,
    },
    typeLabel:{
        backgroundColor:'#FFC107',
        padding:5,
        borderRadius:20,
    },
    weakLabel:{
        backgroundColor:'#f44336',
        padding:5,
        borderRadius:20
    },
    evoLabel:{
        backgroundColor:'#4CAF50',
        padding:5,
        borderRadius:20
    },
    labelView:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    }
});
import  React from 'react'
import {View, Text, Image} from 'react-native'

export default PokemonScreen = ({navigation})=> {
    
    const name = navigation.getParam('name')
    const image = navigation.getParam('image')
    
    return (
        <View style={{backgroundColor: '#03A9F4', flex:1, flexDirection:'column'}}>
            <View style={{backgroundColor: '#fff', height:450, width:300, alignSelf:'center', borderRadius:5, marginTop:50, elevation:5}}>
                <Image source={{uri:`${image}`}} style={{height:175, width:175, alignSelf:'center', marginTop:-100}} />
                <Text style={{textAlign:'center', fontSize:20, color:'black', fontWeight:'bold'}}>{name.toUpperCase()}</Text>
            </View>
        </View>
    )
}

PokemonScreen.navigationOptions =({navigation})=> ({
    headerStyle: {
        backgroundColor: '#03A9F4',
        elevation:0
    },
    headerTintColor: '#fff',
});
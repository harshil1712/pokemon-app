import  React from 'react'
import {View, Text, Image} from 'react-native'

export default Card = (props)=> (
    <View style={{}}>
        <Image source={{uri:`${props.image}`}} style={{height:100, width:100, alignSelf:'center'}} />
        <Text style={{textAlign:'center', paddingTop:10, fontSize:18, color:'black'}}>{props.name}</Text>
    </View>
)


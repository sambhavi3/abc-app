import * as React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
 
 export default class AppHeader extends React.Component{
   render(){
     return(
       <View style={styles.container}>
       <Text style={styles.title}> ABC APP </Text>
       <Text style={styles.descrip}> For kids aged 2-4 </Text>
        
       </View>
     )
   }
 }
   const styles=StyleSheet.create({
     container:{
       flex:-1,
       padding:0,
       backgroundColor:'yellow'
     },
     title:{
       color:'blue',
       padding:1,
       fontSize:40,
       fontWeight:'bold',
       textAlign:'center',
       fontFamily:'Rampart',
       alignSelf:'center',
       marginTop:20,
     },
     descrip:{
       color:'purple',
       padding:1,
       fontSize:20,
       fontWeight:'bold',
       textAlign:'center',
       fontFamily:'Rampart',
       alignSelf:'center',
       marginTop:10,
     }
   })
import { setStatusBarBackgroundColor } from "expo-status-bar";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#171515',
        
      },
      header:{
          height:100,
          backgroundColor:'black',
          paddingHorizontal:30,
          paddingtop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          
      },  
      textS:{
        color:'white',
        marginTop: 60,
        fontWeight: 'bold'
        
      },
    
      image: {
        width:30,
        height:40,
        marginTop: 50,
    },
    footer:{
      height:200,
      backgroundColor:'#0D0C0C',
      paddingHorizontal:30,
      paddingtop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textA: {
      color:'white',
      marginTop: 20,
      fontWeight: 'bold',
      fontSize: 17,
      paddingHorizontal:15,
      
      
    },
    imagealinha: {
      height:180,
          backgroundColor:'#171515',
          paddingHorizontal:15,
          paddingtop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          
    },
    imagealinha2: {
      height:180,
          backgroundColor:'#171515',
          paddingHorizontal:15,
          paddingtop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          
    },
    imagealinha3: {
      height:200,
          backgroundColor:'#171515',
          paddingHorizontal:15,
          paddingtop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          
    },
    image2: {
      width:122,
      height:176,
      marginTop: 10,
    },
    image3: {
      width:122,
      height:176,
      marginTop: 10,
    },
    image4: {
      width:122,
      height:176,
      marginTop: 10,
    },
    icon:{
      paddingBottom: 120,
    }
    
})
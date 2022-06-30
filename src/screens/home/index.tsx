import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import netflix from "../../assets/images/netflix.png";
import youserie from "../../assets/images/youserie.jpg";
import lovecartaz from "../../assets/images/lovecartaz.jpg";
import queens from "../../assets/images/queens.jpg";
import narco from "../../assets/images/narco.jpg";
import emily from "../../assets/images/emily.jpg";
import lacasadepapel from "../../assets/images/lacasadepapel.jpg";
import extraction from "../../assets/images/extraction.jpg";
import riverdale from "../../assets/images/riverdale.jpg";
import dontlook from "../../assets/images/dontlook.jpg";
import Icon from 'react-native-vector-icons/Feather';



export const Home = () => {
    return <View style={styles.container}>
        <View style={styles.header}>
            <Image source={netflix} style={styles.image}/>
            <Text style={styles.textS}>TvShows</Text>
            <Text style={styles.textS}>Movies</Text>
            <Text style={styles.textS}>MyList</Text>
        </View>
       <View>
            <Text style={styles.textA}>Popular on Netflix</Text>
       </View>
       <View style={styles.imagealinha}>
            <Image source={youserie} style={styles.image2}/>
            <Image source={lovecartaz} style={styles.image2}/>
            <Image source={queens} style={styles.image2}/>
       </View>
       <View>
            <Text style={styles.textA}>Trending Now</Text>
       </View>
       <View style={styles.imagealinha2}>
            <Image source={extraction} style={styles.image3}/>
            <Image source={riverdale} style={styles.image3}/>
            <Image source={dontlook} style={styles.image3}/>
       </View>
       <View>
            <Text style={styles.textA}>Watch it Again</Text>
       </View>
       <View style={styles.imagealinha3}>
            <Image source={narco} style={styles.image4}/>
            <Image source={emily} style={styles.image4}/>
            <Image source={lacasadepapel} style={styles.image4}/>
       </View>
       <View>
        
       </View>
        <View style={styles.footer}>
            <Icon style={styles.icon} name="home" size={40} color="#847D84" />
            <Icon style={styles.icon} name="search" size={40} color="#847D84" />
            <Icon style={styles.icon} name="download" size={40} color="#847D84" />
            <Icon style={styles.icon} name="more-vertical" size={40} color="#847D84" />
         </View>
         
        
       
    </View>
}
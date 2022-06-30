import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";
import netflixlogo from "../../assets/images/netflixlogo.png";

export const Skills = () =>{
    return <View style={styles.container}>
        <View> 
            <Image source={netflixlogo} style={styles.image}/>
        </View>

        <TouchableOpacity style={styles.buttonSkill}>
            <TextInput
                style={styles.textSkill}
                placeholder={"Email or phone number"}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonSkill2}>
        <TextInput
                style={styles.textSkill2}
                placeholder={"Password                             SHOW"}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}>
            <Text style={styles.text2}>
                Sign In
            </Text>
        </TouchableOpacity>
        
        <Text style={styles.text3}>
            Recover Password
        </Text>
        <Text style={styles.text4}>
            Sign in is protected by Google reCAPTCHA {"\n"} to ensure you're not a bot. <Text style={styles.text5}>Learn More.</Text>
        </Text>
       
    </View>

   
}
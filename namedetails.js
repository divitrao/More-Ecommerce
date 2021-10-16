import React from "react";
import { StyleSheet, Text, View, Image, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";

import FlatButton from "../../components/button";



const Namedetails = () => {

  // const [detail, setDetail] = useState({});
  // const [errors, setErrors] = useState({});

  // const onChange=({name, value}) => {
  //   setDetail({...detail, [name]: value});
  // };
  
  // const onSubmit = () => {

  // };
  // // const pressHandler
  //   return (
  //     onSubmit={onSubmit}
  //     onChange={onChange}
  //     detail={detail}
  //     errors={errors}
    
      <ScrollView>
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss();
        }}>
            <View>
              <View style={styles.logo_view}>
                <Image style={styles.image} resizeMode='contain' source={require('../../assets/images/more_logo.jpg')} />
              </View> 

              <View style={styles.placeHolder} >
                 <View> 
                      <Text style={styles.content}>Your Name</Text>
                      <TextInput
                      placeholder="Your Full Name" style={styles.input} />

                  </View>    

                  <View>
                      <Text style={styles.emailcontent}>Your Email</Text>
                      <TextInput
                      placeholder="Your Email" style={styles.input} />

                  </View>
                </View> 
               
                <FlatButton text='Submit and Continue' 
                 onPress={() => navigation.navigate('Getlocation')} />
            </View>
        </TouchableWithoutFeedback>
      </ScrollView>
  );
}


const styles = StyleSheet.create({

  logo_view:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center"

  },

    image:{
      
        height: 100,
        width:150,
       
      },

    content: {
        marginTop: 100,
        marginHorizontal:20,
        paddingVertical:10

      },

    emailcontent: {
        marginTop: 40,
        marginHorizontal:20,
        marginHorizontal:20,
        paddingVertical:10

      },  


     textcontent: {
        color: 'grey',
        
      },

      input: {
        alignItems:"center",
        marginHorizontal:20,
        borderBottomWidth: 1,
        borderBottomColor: '#a89f9f',
        paddingVertical:8
       },
      
        
      
  
      


})


export default Namedetails;
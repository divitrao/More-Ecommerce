import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import List_Categories from '../../components/Categories/list';

export default function List_Category({navigation}) {
  

  return (
    <View style={styles.container}>
        
        <List_Categories />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
})
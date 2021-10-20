
import React, { useState } from 'react';
import { Dimensions, TouchableOpacity, ViewComponent, StyleSheet,View, } from 'react-native';

import {
  NativeBaseProvider,
  Box,
  Text,
  Pressable,
  Heading,
  IconButton,
  Icon,
  HStack,
  Avatar,
  VStack,
  Spacer,
  Image,
  Badge,
  Button,
  AddIcon,
  MinusIcon,
  Input
} from 'native-base';
import { SwipeListView } from 'react-native-swipe-list-view';
import categoriesStyles from './styles/categories_styles';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [mode, setMode] = useState('Basic');
 
  return (
    <NativeBaseProvider>
        <Basic />
        
    </NativeBaseProvider>
  );
}

function Basic() {
    const[cartValue, setCartValue] = useState([])   


    
    const data = [
        {
            id:1,
            image: require('../../assets/images/image_1.png'),
            content:'OPP Sooji 500gm Pouch',
            colors:'#53B175',
            actual_amount: 33,
            discount_amount: 19,
            discount_perc: '42%', 
            quantity:['1kg','2kg'],
            rating_perc: 3.8,
            rating_count: 29108,
            is_vegan: false
        },
        {
            id:2,
            image: require('../../assets/images/image_2.png'),
            content: 'Aashirvaad Superior MP Wheat Atta',
            colors:'#53B175',
            actual_amount: 109,
            discount_amount: 98,
            discount_perc: '10%',
            quantity:['1kg','2kg'],
            rating_perc: 4.3,
            rating_count: 62191,
            is_vegan: true
        },
        {
            id:3,
            image: require('../../assets/images/image_3.png'),
            content:'Aashirvaad Sharbati Select Atta',
            colors:'#53B175',
            actual_amount: 315,
            discount_amount: 293,
            discount_perc: '7%',
            quantity:['1kg','2kg'],
            rating_perc: 3.8,
            rating_count: 29102,
            is_vegan: false

        },

        {
            id:4,
            image: require('../../assets/images/image_3.png'),
            content:'Aashirvaad Sharbati Select Atta',
            colors:'#53B175',
            actual_amount: 315,
            discount_amount: 293,
            discount_perc: '7%',
            quantity:['1kg','2kg'],
            rating_perc: 3.8,
            rating_count: 29102,
            is_vegan: false

        },

        {
            id:5,
            image: require('../../assets/images/image_3.png'),
            content:'Aashirvaad Sharbati Select Atta',
            colors:'#53B175',
            actual_amount: 315,
            discount_amount: 293,
            discount_perc: '7%',
            quantity:['1kg','2kg'],
            rating_perc: 3.8,
            rating_count: 29102,
            is_vegan: false

        },
        
    ]

  const [listData, setListData] = useState(data);


    const onIncrementHandler = (item_id) => {
      const item_exist = cartValue.find((x)=> x['item_id']===item_id);
      
      if(item_exist){
          setCartValue(
              cartValue.map((x)=>
                  x['item_id'] === item_id ?{...item_exist, qty: x['qty'] + 1}: x
              )
          );
        }
      else{
          setCartValue([...cartValue,{item_id:item_id, qty: 1}]);
        }
    }


    const onDecrementHandler = (item_id) => { 
      const item_exist = cartValue.find((x)=> x['item_id']=== item_id);
      
      if(item_exist['qty']===1){
          setCartValue(
              cartValue.filter((x) => x['item_id'] !== item_id)
          );
      }
      else{
          setCartValue(cartValue.map((x)=>
              x['item_id'] === item_id ? {...item_exist, qty:x['qty'] - 1}: x
          ));
      }
    }




  const renderItem = ({ item, index }) => (
    <Box height="auto" backgroundColor="white" flex="1"> 
      <Pressable onPress={() => console.log('You touched me')} bg="white">
        <Box
            borderWidth="1"
            borderRadius="5"
            borderColor="#E2E2E2"
            pl="2"
            pr="1"
            py="2"
            marginTop="2"
            height="auto"
            style={{marginHorizontal:6}}
          >
              <HStack space={6} style={{paddingHorizontal:10}}>
                <Image source={item.image} style={categoriesStyles.image} alt="Image description"/>
                    <VStack style={{width:'70%'}}>
                        <View style={{flexDirection:'row',}}>
                            <View style={[{flex:1,flexDirection:'row',width:1}]}>
                                <Text _dark={{color: "warmGray.50",}}  color="coolGray.800" bold style={{fontSize:19}}>
                                <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_b.png')} />{item.discount_amount}
                                    <Text bold  
                                    style={{textDecorationLine:'line-through',fontSize:16,color:'#9A9A9A'}}>
                                        <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_b.png')} /> {item.actual_amount}   
                                    </Text>

                                </Text>
                                  <Badge bgColor="#2898FF" justifyContent="center" variant='solid' borderRadius="6" height="7" width="50" marginLeft="4" >
                                     <Text style={{fontWeight:'bold',color:'white'}}>{item.discount_perc}</Text></Badge>
                            </View>
                            
                        </View>


                        <Text _dark={{color: "warmGray.50",}} color="coolGray.800" bold style={{width:200,fontSize:15,color:'#9A9A9A',}}>
                            {item.content}                            
                        </Text>
                        
                        {item.is_vegan && <View style={{marginVertical:10,height:20}}>
                            <Image resizeMode='contain' alt="vegan"  source={require('../../assets/images/vegan.png')} /> 
                        </View>}
                        
                        <View style={{paddingTop:10,}}>
                        <Text style={{color:"#24AF8E"}} bold>
                        <Image resizeMode='contain' alt="star" source={require('../../assets/images/star.png')} /> 
                           {item.rating_perc} <Text style={{color:'#9A9A9A'}}> {item.rating_count} Ratings</Text>
                        </Text>
                        </View>
                        
                        <View  style={{flexDirection:'row',alignItems:'center'}}>
                        <View style={[{flex:1,flexDirection:'row',width:1}]}>
                            <Picker style={{width:'100%',borderWidth:10,borderColor:'#F04E23'}}>
                                <Picker.Item label="1 Kg" />
                                <Picker.Item label="2 Kg" />
                            </Picker>
                        
                        </View>
                        {console.log(cartValue,"2")}
                        {console.log(cartValue['qty'],"111")}
                        {cartValue.length == 0  && <View style={{flex:1,alignItems:'flex-end'}}>
                       <Button
                            rightIcon={<AddIcon size="4" />}
                            bgColor="#F04E23"
                            onPress={()=>onIncrementHandler(item.id)}
                            style={{width:'65%',justifyContent:'space-around'}}
                            >
                        ADD
                        </Button>
                        
                        </View> }
                      

                        {(() => {
                       
                       
                       if (cartValue.length > 0)
                       {
                         return (
                        
                          <View style={[{flex:1,flexDirection:'row',width:1,height:29,justifyContent:'center'}]}>
                          <Button style={{width:'23%',justifyContent:'center',alignItems:'center', backgroundColor:'#F04E23'}}
                              onPress={()=>onDecrementHandler(item.id)}>
                              <MinusIcon size='3' style={{flex:1,flexDirection:'row',color:'white'}}/></Button>
                          <Input
                              value={cartValue[0]['qty'].toString()}
                              showSoftInputOnFocus={false}
                              mx="0"
                              w={{
                                  base: "45%",
                              }}
                              style={{height:29,textAlign:'center'}}
                              
                              />
                          <Button  style={{width:'23%',justifyContent:'space-around',  backgroundColor:'#F04E23'}}
                              onPress={()=>onIncrementHandler(item.id)}>
                              <AddIcon size="3" style={{flex:1,flexDirection:'row',color:'white'}}/></Button>
                          </View>
                          )
                        }
                         })()}

                        </View>
                 

                         
                    </VStack>
                    </HStack>
        </Box>
      </Pressable>
    </Box>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="3">
      <Pressable
        w="160"
        ml="auto"
     
        bg="#24AF8E"
        justifyContent="center"
        h="100%"
        marginTop="2">
        <VStack alignItems="center" space={4}>
      
        <Image source={require('../../assets/images/list.png')} alt="Image description" style={{marginLeft:20}}/>
          <Text  fontWeight="medium" color="white" style={{marginLeft:20}} >
            Add to my list
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <Box bg="white" safeArea flex="1" style={{marginHorizontal:2,borderWidth:2}}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-130}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
      />

    {cartValue.length > 0 &&
      <View style={{
          position:'absolute',
          bottom:25,
          left:20,
          right:20,
          elevation:0,
          backgroundColor:'#F04E23',
          borderRadius:5,
          height:60
          }}>
            <View style={styles.navBar}>
               <View style={styles.leftContainer}>
                   <Text style={[styles.text, {textAlign: 'left',color:'white',fontSize:14,textAlignVertical:'center'}]}>{cartValue[0]['qty']} item |
                   <Image resizeMode='contain' alt="currency" source={require('../../assets/images/currency_w.png')} />601   
                   {/* <Icon name="rupee" size={20} style={{letterSpacing:10}}/> */}
                   <Image resizeMode='contain' alt="currency"  source={require('../../assets/images/currency_w.png')} />
                   <Text style={{color:'white',textDecorationLine:'line-through'}}>827</Text></Text>
               </View>
               <View style={styles.rightContainer}>
                   <Text style={{color:'white',fontSize:17}}>View Cart  <Image resizeMode='contain' source={require('../../assets/images/cart.png')} alt="cart" /></Text>
               </View>
           </View>
      </View>
      }
    </Box>
  );
}



const styles=StyleSheet.create({
      navBar: {
       
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "#F04E23",
        // marginBottom: 50,
        padding: 10,
        borderRadius: 6,
        marginHorizontal:15,
        
      },
      leftContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',

      },
      rightContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      rightIcon: {
        height: 10,
        width: 10,
        resizeMode: 'contain',
        backgroundColor: 'white',
      }

})
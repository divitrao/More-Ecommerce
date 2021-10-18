import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MobileVerification from '../screens/MobileOtp/mobileVerification';
import Home from '../screens/MobileOtp/Categories';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { View, Text, Image } from 'react-native'
import { Icon } from 'react-native-elements';

import TopTabNavigation from '../components/customNavigation/topNavigator/topTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

const LoginStack=()=>{

    const Stack = createNativeStackNavigator();
    
 
    return(
        <NavigationContainer>
        <Stack.Navigator>
            
            <Stack.Screen name="Login"  options={{headerShown:false}}   component={MobileVerification} />
            <Stack.Screen name="Categories"  options={{headerShown:false}}  component={TopTabNavigation} 
                options={{
                    title:'Fruits & Vegetables',
                    headerRight: ()=>{ 
                            return(
                                <View>
                                      <Image resizeMode='contain' source={require('../assets/images/Vector.png')} />
                                    {/* <Icon size={21} name="star" type="material"/> */}
                                </View>
                            )
                        }
                    }} />
        </Stack.Navigator>   
        </NavigationContainer>             
            
    )

}

export default LoginStack



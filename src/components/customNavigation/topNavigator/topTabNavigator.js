
import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../../../screens/MobileOtp/Categories';



function TopTabNavigation(){
  const MaterialTopTabs = createMaterialTopTabNavigator();

  return(
        
          <MaterialTopTabs.Navigator screenOptions={{
            tabBarLabelStyle: {fontSize:12},
            tabBarScrollEnabled: true,
            tabBarIndicatorStyle: {color:'#F04E23'},
            tabBarIndicatorContainerStyle: {color:'#F04E23'},
            tabBarStyle:{width:300}
            
          }}>
              <MaterialTopTabs.Screen name="All" component={Home} />
              <MaterialTopTabs.Screen name="SeasonalFruits" component={Home} />
              <MaterialTopTabs.Screen name="ExoticFruits" component={Home} />
              <MaterialTopTabs.Screen name="DailyVegetables" component={Home} />
              <MaterialTopTabs.Screen name="DailyVegetables222" component={Home} />
          
          </MaterialTopTabs.Navigator>
  )
}


export default TopTabNavigation
import React from 'react'
import {View, Text} from 'react-native'
import Carousel_card from './carousel_section/carousel_section'
import Footer from './footer_section/footer_section'
import Address_header from './header_section/header'
import Search_bar from './search_bar_section/search_bar'
import Shop from './shop_section/shop_section'

const Home = () => {
    return (
        <View style={{flex:1}}>
            <Address_header />
            <View style={{alignItems:'center'}}>
            <Search_bar />
            </View>
            <Carousel_card />
            <Shop />
            {/* <Footer /> */}
        </View>
    )
}

export default Home

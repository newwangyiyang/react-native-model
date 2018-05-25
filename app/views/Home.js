import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';

import pStyle from '../assets/styles/publicStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
class Home extends Component{
    static navigationOptions = {
        headerStyle: {height: 30},
        headerTitle: 'Home页面',
        headerTitleStyle: {flex: 1, textAlign: 'center', fontSize: 18, fontWeight: '400'}
    }
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={[pStyle.flexC, pStyle.comBg]}>
                <Text style={pStyle.textShow}>Home</Text>
                <Button 
                title="goNews"
                onPress={() => this.props.navigation.navigate('News', {newsId: 'test'})}
                />

                <Ionicons name="logo-angular" size={200} color="teal" />
            </View>
        )
    }
}

export default Home;
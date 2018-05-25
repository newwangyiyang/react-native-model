import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import pStyles from '../assets/styles/publicStyles';
class ForYou extends Component{
    render() {
        return (
            <View style={[pStyles.flexC, pStyles.comBg]}>
                <Text style={pStyles.textShow}>ForYou</Text>
            </View>
        )
    }
}
export default ForYou;
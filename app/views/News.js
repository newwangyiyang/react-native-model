import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

import pStyles from '../assets/styles/publicStyles'
class News extends Component{
    static navigationOptions = {
        header: null
    }
    constructor(props) {
        super(props);
        this.state = {
            params: {
                newsId: ''
            }
        };
    }
    componentWillMount() {
        const {navigation} = this.props;
        const newsId = navigation.getParam('newsId');
        this.setState({
            params: {
                newsId
            }
        });
    }
    render() {
        return (
            <View style={[pStyles.flexC, styles.wrap]}>
                <Text style={pStyles.textShow}>News</Text>
                <Button title="go home" onPress={() => this.props.navigation.popToTop()} />
                <Text style={[pStyles.textShow, {marginTop: 30}]}>{this.state.params.newsId}</Text>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    wrap: {
        backgroundColor: 'teal'
    }
});
export default News;
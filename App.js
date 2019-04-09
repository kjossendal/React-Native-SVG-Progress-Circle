import React, {Component} from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Slider from '@react-native-community/slider';

import CircularProgressBar from './CircularProgressBar'

type Props = {};
export default class App extends Component<Props> {
    state = {
        percentage: 25
    };
    handleChangeEvent = (event) => {
        this.setState({
            percentage: event
        });
    }
    render() {
        return (
        <View style={styles.container}>
            <CircularProgressBar
                strokeWidth="10"
                sqSize="200"
                percentage={this.state.percentage}/>
                <Slider
                    style={{width: 200, height: 60}}
                    minimumValue={0}
                    maximumValue={100}
                    value={this.state.percentage}
                    onValueChange={this.handleChangeEvent}
                    minimumTrackTintColor="grey"
                    maximumTrackTintColor="red"
                    thumbTintColor="red"
                />
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});

import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import Slider from '@react-native-community/slider';

import CircularProgressBar from './CircularProgressBar'

type Props = {};
export default class App extends Component<Props> {
    state = {
        percentage: 0,
        speed: 50,
        text: 'Breathe In',
        timerInterval: null,
        timerTimeout: null
    };

    componentDidMount = () => { }

    startInterval = () => {
        this.setState({

            timer: setInterval(next = () => {
                if(this.state.percentage >= 100) {
                    this.setState({ percentage: 0, text: 'Breathe In' })
                }
                if(this.state.percentage >= 40) {
                    this.setState({ text: 'Hold' })
                }
                if(this.state.percentage >= 60) {
                    this.setState({ text: 'Breathe Out' })
                }
                this.setState({
                    percentage: this.state.percentage + 1
                });

                // Have the function set another timeout to call itself later.
                // setTimeout(next, this.state.speed);
            
            }, this.state.speed)
        })
    };
    startTimeout = () => {
        this.setState({

            timer: setTimeout(next = () => {
                if(this.state.percentage >= 100) {
                    this.setState({ percentage: 0, text: 'Breathe In' })
                }
                if(this.state.percentage >= 40) {
                    this.setState({ text: 'Hold' })
                }
                if(this.state.percentage >= 60) {
                    this.setState({ text: 'Breathe Out' })
                }
                this.setState({
                    percentage: this.state.percentage + 1
                });

                // Have the function set another timeout to call itself later.
                setTimeout(next, this.state.speed);
            
            }, this.state.speed)
        })
    };
    stop = () => {
        clearInterval(this.state.timerInterval);
        clearTimeout(this.state.timerTimeout)
        this.setState({ 
            timerTimeout: null, 
            timerInterval: null,
            percentage: 0, 
            text: 'Breathe In' 
        })
    }
    handleChangeEvent = (event) => {
        this.setState({
            speed: event
        });
    }
    render() {
        return (
        <View style={styles.container}>
            <Text style={{fontSize: 30, marginBottom: 20}}>{this.state.text}</Text>
            <CircularProgressBar
                strokeWidth="10"
                sqSize="200"
                percentage={this.state.percentage}/>
            <Slider
                style={{width: 200, height: 60}}
                minimumValue={0}
                maximumValue={100}
                value={this.state.speed}
                onValueChange={this.handleChangeEvent}
                minimumTrackTintColor="grey"
                maximumTrackTintColor="red"
                thumbTintColor="red"
            />
            <Text style={{fontSize: 12, marginBottom: 10 }}>Adjust Speed</Text>
            <View style={styles.buttonContainer}>
                <View style={{margin:1}}>
                    <Button onPress={this.startInterval} title="Start Interval"></Button>
                </View>
                <View style={{margin:1}}>
                    <Button onPress={this.startTimeout} title="Start Timeout"></Button>
                </View>
                <View style={{margin:1}}>
                    <Button onPress={this.stop} title="Stop"></Button>
                </View>
            </View>
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
    buttonContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  StatusBar
} from 'react-native';

export default class App extends React.Component {
  buttonPress = id => {
    console.log(id);
  };

  createButton(id) {
    return (
      <TouchableWithoutFeedback onPress={() => this.buttonPress(id)}>
        <View style={styles.button}>
          <Text style={{ fontSize: 30, color: 'yellow' }}>{id}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View style={styles.subcontainer}>{this.createButton('darts')}</View>
        <View style={styles.subcontainer}>{this.createButton('foosball')}</View>
        <View style={styles.subcontainer}>{this.createButton('fifa')}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    margin: 5
  },
  subcontainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    alignContent: 'stretch',
    alignSelf: 'stretch'
  }
});

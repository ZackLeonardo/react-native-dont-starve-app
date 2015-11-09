'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  ListView,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  TouchableHighlight,
  TouchableNativeFeedback,
} = React;

var sortBar = React.createClass({
  render: function () {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };
    return (
      <View style={styles.sortBar}>
        <View style={styles.sortThreeD}>
          <TouchableElement
            onPress={this.props.sortLife}>
            <Image style={styles.cellImage}
              source={require('image!life')}
              />
          </TouchableElement>
          <TouchableElement
            onPress={this.props.sortHunger}>
            <Image style={styles.cellImage} source={require('image!hunger')}/>
          </TouchableElement>
          <TouchableElement
            onPress={this.props.sortSpirit}>
            <Image style={styles.cellImage} source={require('image!spirit')}/>
          </TouchableElement>
        </View>
      </View>
    );
  },


});

var styles = StyleSheet.create({
  sortBar: {
    marginTop: 64,
    padding: 3,
    paddingLeft: 8,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#272012',
    backgroundColor: '#333333',
    width: Dimensions.get('window').width,
    height: 50,
  },
  sortThreeD: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333333',
    width: Dimensions.get('window').width - 80,
    marginLeft: 75,
  },
  cellImage: {
    borderRadius: 10,
    backgroundColor: '#333333',
    height: 50,
    width: 50,
  },
});

module.exports = sortBar;

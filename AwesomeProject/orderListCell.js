'use strict';

var React = require('react-native');
var {
  Image,
  Text,
  StyleSheet,
  View,
  TouchableHighlight,
  TouchableNativeFeedback,
  Platform,
  PixelRatio,
  Dimensions,
} = React;

var orderListCell = React.createClass({
  render: function() {
    var picName = this.props.cell.picName;
    var name = this.props.cell.name;

    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };

    return (
      <View>
        <TouchableElement
          onPress={this.props.onPress}
          onShowUnderlay={this.props.onHighlight}
          onHideUnderlay={this.props.onUnhighlight}>
          <View style={styles.container}>
            <Image style={styles.cellImage} source={{uri:picName}} />
            <View style={styles.c1}>
              <View style={styles.c2}>
                <Text style={styles.threeD}>
                  {this.props.cell.cookInfo.life}
                </Text>
                <Text style={styles.threeD}>
                  {this.props.cell.cookInfo.hunger}
                </Text>
                <Text style={styles.threeD}>
                  {this.props.cell.cookInfo.spirit}
                </Text>
              </View>
              <Text style={styles.name}>
                {name}
              </Text>
            </View>
          </View>
        </TouchableElement>
      </View>
    );
  },



});

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'white',
    width: Dimensions.get('window').width,
    borderBottomWidth: 1 / PixelRatio.get(),
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  name: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    color: '#333333',
    fontWeight: 'bold',
  },
  cellImage: {
    borderRadius: 10,
    backgroundColor: '#333333',
    height: 60,
    margin: 10,
    width: 60,
  },
  c1: {
    flexDirection: 'column',
    alignItems: 'center',
    width: Dimensions.get('window').width - 80,
  },
  c2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Dimensions.get('window').width - 80,
  },
  threeD: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

module.exports = orderListCell;

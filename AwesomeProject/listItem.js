'use strict'

var React = require('react-native');

var {
  // AppRegistry,
  Image,
  PixelRatio,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} = React;

var mainListItem = React.createClass({
  render: function () {
    var TouchableElement = TouchableHighlight;
    if (Platform.OS === 'android') {
      TouchableElement = TouchableNativeFeedback;
    };

    var picName = this.props.item.itemPicName;

    return (
      <View>
        <TouchableElement
        onPress={this.props.onSelect}
        onShowUnderlay={this.props.onHighlight}
        onHideUnderlay={this.props.onUnhighlight}>
        <View style={styles.row}>
          <Image style={styles.cellImage}  source={{uri:picName}}/>
          <Text style={styles.listTitle}>
            {this.props.item.itemName}
          </Text>
        </View>
        </TouchableElement>
        <View style={ styles.cellBorder } />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  textContainer: {
    flex: 1,
  },
  listTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 2,
  },
  row: {
    alignItems: 'center',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 5,
  },
  cellImage: {
    borderRadius: 10,
    backgroundColor: '#dddddd',
    height: 95/2,
    marginRight: 10,
    marginLeft: 10,
    width: 104/2,
  },
  cellBorder: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // Trick to get the thinest line the device can display
    height: 1 / PixelRatio.get(),
    marginLeft: 4,
  },

});

// AppRegistry.registerComponent('AwesomeProject', () => mainListItem);

module.exports = mainListItem;

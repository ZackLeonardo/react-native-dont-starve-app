'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Navigator,
  ScrollView,
  Image,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} = React;

var Lightbox = require('react-native-lightbox');

var divStyle = {
  flex: 1,
  backgroundColor: 'blue',
  width: 100,
  height: 100,
};

var LightboxView = React.createClass({
  render: function() {
    return (
      <Lightbox

        navigator={this.props.navigator}
        renderHeader={close => (
            <TouchableOpacity onPress={close}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          )}>
        <View>
          <Image
            style={styles.carousel}
            resizeMode="contain"
            source={{ uri:'willow' }}
          />
        <Text style={styles.closeButton}> tetete</Text>
        </View>

      </Lightbox>
    );
  },
});

var styles = StyleSheet.create({
  lightbox: {
    flex: 1,
    width: 100,
    height: 100,
  },
  closeButton: {
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 8,
    borderRadius: 3,
    textAlign: 'center',
    margin: 10,

  },
  carousel: {
    height: 100,
    flex: 1,
    backgroundColor: 'white',
  },
  contain: {
    flex: 1,
    height: 150,
  },
});

module.exports = LightboxView;

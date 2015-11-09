
'use strict';

var React = require('react-native');

var mainList = require('./mainList');

var {
  AppRegistry,
  NavigatorIOS,
  StyleSheet,
} = React;

var dontStarveApp = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: '饥荒',
          component: mainList,
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => dontStarveApp);

module.exports = dontStarveApp;

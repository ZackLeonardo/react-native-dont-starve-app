'use strict';

var React = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet,
  Platform,
} = React;

var bioesData = require('./bioes.json');
var s = require('./styles');
var List = require('./list');
var bioInfo = require('./bioInfo');
var ListOfList = require('./listOfList');

var bioesList = React.createClass({
  render: function () {
    var listObj = new Array();
    bioesData.bioes.map((item, i) => {
      listObj[i] = React.createClass({
        render: function () {
          // alert(i);
          return (
            <List
              data={item.bio}
              info={bioInfo}
              navigator={this.props.navigator}
            />
          );
        },
      });
    })

    return (
      <ListOfList
        listData={bioesData.bioes}
        listObj={listObj}
        navigator={this.props.navigator}
        />
    );
  },

});


module.exports = bioesList;

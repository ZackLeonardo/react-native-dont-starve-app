'use strict';

var React = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet,
  Platform,
} = React;

var ingredientsData = require('./ingredients.json');
var s = require('./styles');
var List = require('./list');
var ingredientInfo = require('./ingredientInfo');
var ListOfList = require('./listOfList');

var ingredientsList = React.createClass({
  render: function () {
    var listObj = new Array();
    ingredientsData.ingredients.map((item, i) => {
      listObj[i] = React.createClass({
        render: function () {
          return (
            <List
              data={item.ingredient}
              info={ingredientInfo}
              navigator={this.props.navigator}
            />
          );
        },
      });
    })

    return (
      <ListOfList
        listData={ingredientsData.ingredients}
        listObj={listObj}
        navigator={this.props.navigator}
        />
    );
  },

});


module.exports = ingredientsList;

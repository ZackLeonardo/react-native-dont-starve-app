'use strict';

var React = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet,
  Platform,
} = React;

var IngredientsListItem = require('./listItem');
var ingredientsData = require('./ingredients.json');
var s = require('./styles');

var List = require('./list');
var ingredientInfo = require('./ingredientInfo');

var fruitsList = React.createClass({
  render: function() {
    return (
        <List
          data={ingredientsData.ingredients[0].ingredient}
          info={ingredientInfo}
          navigator={this.props.navigator}
        />
    );
  },
});

var meatsList = React.createClass({
  render: function() {
    return (
        <List
          data={ingredientsData.ingredients[1].ingredient}
          info={ingredientInfo}
          navigator={this.props.navigator}
        />
    );
  },
});

var listObj = new Array();

// for (var i = 0; i < ingredientsData.ingredients.length; i++) {
//   listObj[i] = React.createClass({
//     render: function () {
//       return (
//         <List
//           data={ingredientsData.ingredients[i].ingredient}
//           info={ingredientInfo}
//           navigator={this.props.navigator}
//         />
//       );
//     },
//   });
// }



listObj[0] = fruitsList;
listObj[1] = meatsList;

var ingredientsList = React.createClass({
  getInitialState: function () {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    return {
      dataSource: this.getDataSource(ingredientsData.ingredients),
    };
  },

  render: function () {
    var content = <ListView
      ref="listView"
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      />;
    return (
      <View style={s.container}>
        {content}
      </View>
    );
  },

  renderRow: function (
    item: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <IngredientsListItem
        onSelect={() => this.selectItem(item, listObj[rowID])}
        onHighlight={() => highlightRowFunc(sectionID, rowID)}
        onUnhighlight={() => highlightRowFunc(null, null)}
        item={item}
      />

    );
  },

  getDataSource: function(items: Array<any>): ListView.DataSource {
    return this.state.dataSource.cloneWithRows(items);
  },

  selectItem: function(item: Object, component: Object) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: item.itemName,
        component: component,
        passProps: {item},
      });
    }
    // else {
    //   dismissKeyboard();
    //   this.props.navigator.push({
    //     title: item.itemName,
    //     name: 'movie',
    //     movie: movie,
    //   });
    // }
  },

});


module.exports = ingredientsList;

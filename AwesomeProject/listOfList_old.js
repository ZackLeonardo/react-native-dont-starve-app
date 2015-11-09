'use strict';

var React = require('react-native');

var {
  View,
  Text,
  ListView,
  StyleSheet,
  Platform,
} = React;

var ListItem = require('./listItem');
// var ingredientsData = require('./ingredients.json');
var s = require('./styles');

// var ingredientInfo = require('./ingredientInfo');




var listOfList = React.createClass({
  getInitialState: function () {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    // alert(ingredientsData.ingredients[0].toString());
    return {
      dataSource: this.getDataSource(this.props.listData),
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
      <ListItem
        onSelect={() => this.selectItem(item, this.props.listObj[rowID])}
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


module.exports = listOfList;

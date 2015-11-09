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
var s = require('./styles');
var List = require('./list');

// var ingredientInfo = require('./ingredientInfo');



var ListOfList = React.createClass({
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


var listOfLists = React.createClass({
  //根据json文件中数据个数分别渲染list（listCell的集合），并赋予listObj
  render: function () {
    var listObj = new Array();
    var theInfo = this.props.info;//最后一张主要页面
    //ingredientsData.ingredients
    this.props.listsData.map((item, i) => {
      listObj[i] = React.createClass({
        render: function () {
          // alert(ingredientInfo);
          return (
            <List
              data={item.itemData}
              info={theInfo}//ingredientInfo
              navigator={this.props.navigator}
            />
          );
        },
      });
    });

    //根据json数据渲染出所有的listOfList
    return (
      <ListOfList
        listData={this.props.listsData}//ingredientsData.ingredients
        listObj={listObj}
        navigator={this.props.navigator}
        />
    );
  },

});



module.exports = listOfLists;

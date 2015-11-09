'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  ListView,
  StyleSheet,
  View,
  Platform,
} = React;

var cooksData = require('./cooks.json');
var OrderListCell = require('./orderListCell');
var cookInfo = require('./cookInfo');
var SortBar = require('./sortBar');
var s = require('./styles');

var cookBookList = React.createClass({
  getInitialState: function () {
    this.ds = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2,
    });
    // this.state = {
    //   dataSource: this.getDataSource(cooksData.cooks),
    //   sortOrder: 1,
    // }
    // this.state = {
    //   dataSource: new ListView.DataSource({
    //     rowHasChanged: (row1, row2) => row1 !== row2,
    //   }),
    // };
    return {
      dataSource: this.getDataSource(cooksData.cooks),
      sortOrder: {
        'life': true,
        'hunger': true,
        'spirit': true,
      },
    };
  },

  render: function () {
    var content = <ListView
      style={styles.list}
      contentContainerStyle={styles.list}
      ref="listview"
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}
      automaticallyAdjustContentInsets={false}
      />;

    return (
      <View style={s.container}>
        <SortBar
          sortLife={this.sortLife}
          sortHunger={this.sortHunger}
          sortSpirit={this.sortSpirit}
          />
        {content}
      </View>
    );
  },

  renderRow: function (
    cook: Object,
    sectionID: number | string,
    rowID: number | string,
    highlightRowFunc: (sectionID: ?number | string, rowID: ?number | string) => void,
  ) {
    return (
      <OrderListCell
        style={styles.item}
        onPress={()=> this.selectCook(cook)}
        cell={cook}
      />
    );
  },

  getDataSource: function(cooks: Array<any>): ListView.DataSource {
    return this.ds.cloneWithRows(cooks);
  },

  selectCook: function(listItem: Object) {
    if (Platform.OS === 'ios') {
      this.props.navigator.push({
        title: listItem.name,
        component: cookInfo,
        passProps: {listItem},
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

  sortBy: function (value) {
    var order;
    console.log(this.state.sortOrder[value]);
    if (this.state.sortOrder[value]){
      order = 1;
    }else{
      order = -1;
    }
    cooksData.cooks.sort(function (a, b) {
      return a.cookInfo[value] > b.cookInfo[value] ? order : -order;
    })
    this.state.sortOrder[value] = !this.state.sortOrder[value];
    this.setState({
      dataSource: this.getDataSource(cooksData.cooks),
    });
  },

  sortLife: function() {
    this.sortBy("life");
  },
  sortHunger: function() {
    this.sortBy("hunger");
  },
  sortSpirit: function() {
    this.sortBy("spirit");
  },
});

var styles = StyleSheet.create({
  item: {
      margin: 10,
  },
});

module.exports = cookBookList;

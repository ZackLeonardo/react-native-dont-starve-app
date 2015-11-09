'use strict';

var React = require('react-native');

var {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  ListView,
} = React;

var MainListItem = require('./listItem');
var itemsData = require('./mainList.json');
var s = require('./styles');
var List = require('./list');

//cookBookOrderList尚未重构，属于特殊类
var cookBookOrderList = require('./cookBookOrderList');
var ListOfLists = require('./listOfLists');

var LightboxView = require('./testLightBox');

var listObj = new Array();

itemsData.items.map((item,i) => {
  var itemInfo = eval(itemsData.items[i].itemInfoPage);
  var itemDataLoader = eval(itemsData.items[i].itemDataLoader);
  if (itemsData.items[i].itemType == 1) {
    listObj[i] = React.createClass({
      render: function() {
        return (
          <List
             data={itemDataLoader.items}
             info={itemInfo}
             navigator={this.props.navigator}/>
        );
      },
    });
  }else if (itemsData.items[i].itemType == 2){
    listObj[i] = React.createClass({
      render: function() {
        return (
          <ListOfLists
            listsData={itemDataLoader.items}
            info={itemInfo}
            navigator={this.props.navigator}
            />
        );
      },
    });
  }else if (itemsData.items[i].itemType == 3) {
    listObj[i] = React.createClass({
      render: function() {
        return (
          <LightboxView/>
        );
      },
    });
  }
});

var mainList = React.createClass({
  getInitialState: function() {
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };

    return {
      dataSource: this.getDataSource(itemsData.items),
    };
  },

  render: function () {
    var content = <ListView
        ref="listview"
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
      <MainListItem
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
      if (component === listObj[1]){
        this.props.navigator.push({
          title: item.itemName,
          component: component,
          passProps: {item},
          rightButtonTitle: '列表',
          onRightButtonPress: () => {
            this.props.navigator.push({
              title: item.itemName,
              component: cookBookOrderList,
              leftButtonTitle: '〈 饥荒',
              // leftButtonIcon: require('image!back_button'),
              onLeftButtonPress: () => this.props.navigator.popN(2),
              rightButtonTitle: '图示',
              onRightButtonPress: () => {
                this.props.navigator.pop()
              },
            })
          },
        });
      }else {
        this.props.navigator.push({
          title: item.itemName,
          component: component,
          passProps: {item},
        });
      }

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



AppRegistry.registerComponent('AwesomeProject', () => mainList);

module.exports = mainList;

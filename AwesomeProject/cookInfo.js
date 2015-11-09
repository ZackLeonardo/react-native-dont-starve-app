'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  StyleSheet,
  View,
} = React;

var s = require('./styles');

var cookInfo = React.createClass({
  render: function () {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <Image style={s.infoImage}
            source={{uri:this.props.listItem.cookInfo.infoPicName}}
            />
          <View>
            <Text style={s.infoLife}>
              生命：{this.props.listItem.cookInfo.life}
            </Text>
            <Text style={s.infoHunger}>
              饥饿：{this.props.listItem.cookInfo.hunger}
            </Text>
            <Text style={s.infoSpirit}>
              精神：{this.props.listItem.cookInfo.spirit}
            </Text>
            <Text style={s.infoShelf}>
              保鲜：{this.props.listItem.cookInfo.shelf}
            </Text>
          </View>
        </View>
        <Text style={styles.title}>
          材料：
        </Text>
        <Text style={styles.material}>
          {this.props.listItem.cookInfo.material}
        </Text>
        <Text style={styles.title}>
          示例：
        </Text>
        <Image style={styles.example} source={{uri:this.props.listItem.cookInfo.example}}/>

      </View>
    );
  },
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 10,
  },
  material: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 10,
    color: '#333333',
  },
  example:{
    borderRadius: 10,
    height: 120,
    margin: 10,
    width: 200,
    resizeMode: 'contain',
  },
});

module.exports = cookInfo;

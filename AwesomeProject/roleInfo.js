'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  StyleSheet,
  View,
} = React;

var s = require('./styles');

var roleInfo = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <Image style={s.infoImage} source={{uri:this.props.listItem.roleInfo.infoPicName}}/>
          <View>
            <Text style={s.infoLife}>
              生命：{this.props.listItem.roleInfo.life}
            </Text>
            <Text style={s.infoHunger}>
              饥饿：{this.props.listItem.roleInfo.hunger}
            </Text>
            <Text style={s.infoSpirit}>
              精神：{this.props.listItem.roleInfo.spirit}
            </Text>
            <Text style={s.infoHarm}>
              伤害：{this.props.listItem.roleInfo.harm}
            </Text>
          </View>
        </View>
        <Text style={styles.info}>
          {this.props.listItem.roleInfo.info}
        </Text>

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
  info: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 10,
    color: '#333333',
  },

});

module.exports = roleInfo;

'use strict';

var React = require('react-native');

var {
  Image,
  Text,
  StyleSheet,
  View,
} = React;

var s = require('./styles');

var ingredientInfo = React.createClass({
  render: function(){
    return (
      <View style={styles.container}>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <Image style={s.infoImage}
            source={{uri:this.props.listItem.ingredientsInfo.infoPicName}}
            />
          <View>
            <Text style={s.infoLife}>
              生命：{this.props.listItem.ingredientsInfo.life[0]}
            </Text>
            <Text style={s.infoHunger}>
              饥饿：{this.props.listItem.ingredientsInfo.hunger[0]}
            </Text>
            <Text style={s.infoSpirit}>
              精神：{this.props.listItem.ingredientsInfo.spirit[0]}
            </Text>
            <Text style={s.infoShelf}>
              保鲜：{this.props.listItem.ingredientsInfo.shelf[0]}
            </Text>
          </View>
        </View>
        <Text style={styles.title}>
          获取：{this.props.listItem.ingredientsInfo.infoGet}
        </Text>
        <Text style={styles.title}>
          粗加工：{this.props.listItem.ingredientsInfo.infoMake}
        </Text>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <Image style={s.infoImage}
            source={{uri:this.props.listItem.ingredientsInfo.infoMadePicName}}
            />
          <View>
            <Text style={s.infoLife}>
              生命：{this.props.listItem.ingredientsInfo.life[1]}
            </Text>
            <Text style={s.infoHunger}>
              饥饿：{this.props.listItem.ingredientsInfo.hunger[1]}
            </Text>
            <Text style={s.infoSpirit}>
              精神：{this.props.listItem.ingredientsInfo.spirit[1]}
            </Text>
            <Text style={s.infoShelf}>
              保鲜：{this.props.listItem.ingredientsInfo.shelf[1]}
            </Text>
          </View>
        </View>
        <Text style={styles.madeName}>
          {this.props.listItem.ingredientsInfo.infoMadeName}
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
  title: {
    fontSize: 18,
    textAlign: 'left',
    // fontWeight: 'bold',
    margin: 8,
  },
  info: {
    fontSize: 20,
    textAlign: 'justify',
    margin: 10,
    color: '#333333',
  },
  madeName: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: -10,
  },

});

module.exports = ingredientInfo;

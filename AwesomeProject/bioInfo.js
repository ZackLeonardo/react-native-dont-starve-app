'use strict';

var React = require('react-native');

var {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} = React;

var s = require('./styles');

var scrollStyle = {
  flex: 1,
  backgroundColor: 'F5FCFF',
  height: Dimensions.get('window').height,
};

var animalInfo = React.createClass({
  render: function () {
    return (
      <ScrollView
        automaticallyAdjustContentInsets={true}
        scrollEventThrottle={200}
        style={scrollStyle}>
      <View style={s.infoContainer}>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <View style={{flexDirection: "column", alignItems: 'center'}}>
            <Image style={s.infoImage} source={{uri:this.props.listItem.picName}}
              />

            <Image style={s.infoImage}
              source={{uri:this.props.listItem.animalInfo.detailPic}}
              />
          </View>
          <View>
            <Text style={s.infoDetail}>
              移动速度：{this.props.listItem.animalInfo.moveSpeed}
            </Text>
            <Text style={s.infoDetail}>
              精神影响：{this.props.listItem.animalInfo.spiritInfect}
            </Text>
            <Text style={s.infoDetail}>
              主动攻击：{this.props.listItem.animalInfo.activeAttack}
            </Text>
            <Text style={s.infoDetail}>
              团队合作：{this.props.listItem.animalInfo.teamWorking}
            </Text>
            <Text style={s.infoDetail}>
              危险程度：{this.props.listItem.animalInfo.dangerLevel}
            </Text>
          </View>
        </View>
        <Text style={s.infoDesc}>
          {this.props.listItem.animalInfo.detail}
        </Text>
        <View style={{flexDirection: "row", alignItems: 'center'}}>
          <Text style={s.infoTitle}>
            掉落物品:
          </Text>
          {
            this.props.listItem.animalInfo.rewards.map((reward) => {
              return (
                <View>
                  <Image style={s.infoRewardImage} source={{uri:reward.pic}}/>
                  <Text style={s.infoDesc}>
                    {reward.prob}
                  </Text>
                </View>
              );
            })
          }
        </View>
      </View>
      </ScrollView>
    );
  },
});

var styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#6A85B1',
    height: 300,
    },

});

module.exports = animalInfo;

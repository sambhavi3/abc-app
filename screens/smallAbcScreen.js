import React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, ScrollView } from 'react-native';
import AppHeader from './appHeader';
export default class SmallAbcScreen extends React.Component {
  render() {
    return (
      <View>
      <SafeAreaView>
      <ScrollView>
        <AppHeader />
        <View>
        <Image
          source={require('../SmallImg/smallA.png')}
          style={styles.imgCapital}></Image>
            </View>
              <View>
        <Image
          source={require('../SmallImg/smallB.png')}
          style={{
            width: 320,
            height: 100,
            resizeMode: 'contain',
            marginLeft: 10,
            paddingTop: 200,
            marginTop: 0,
          }}></Image>
</View>
<View>
           <Image
          source={require('../SmallImg/smallC.png')}
          style={{
            width: 320,
            height: 100,
            resizeMode: 'contain',
            marginLeft: 10,
            paddingTop: 200,
            marginTop: 0,
          }}></Image>
          </View>

 </ScrollView>
   
          </SafeAreaView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  imgCapital: {
    width: 320,
    height: 100,
    resizeMode: 'contain',
    marginLeft: 10,
    paddingTop: 200,
    marginTop: 30,
  },
});

import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';
import AppHeader from './appHeader';
import SmallAbcScreen from './smallAbcScreen';

export default class BigAbcScreen extends React.Component {
  SmallAbcScreen = () => {
    this.props.navigation.navigate('SmallAbcScreen');
  };
  render() {
    return (
       <View style={styles.container}>
        <AppHeader />
      <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={styles.viewContainer}>
            <Image source={require('../CapitalImg/a.png')} style={styles.img} />
          </View>

            <View style={styles.viewContainer}>
            <Image source={require('../CapitalImg/b.png')} style={styles.img} />
          </View>

           <View style={styles.viewContainer}>
            <Image source={require('../CapitalImg/c.png')} style={styles.img} />
          </View>
          </ScrollView>
          </SafeAreaView>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  img: {
    width: 550,
    height: 100,
    resizeMode: 'contain',
    marginLeft: -80,
    paddingTop: 150,
    marginTop: 20,
  },

  viewContainer:{
    flex:0.3
  }
});

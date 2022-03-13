/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {View, Image, StyleSheet, SafeAreaView, Dimensions} from 'react-native';
import {Shadow} from 'react-native-neomorph-shadows';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
const App: () => Node = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Shadow
          inner={false} // <- enable inner shadow
          useArt={false} // <- set this prop to use non-native shadow on ios
          style={{
            shadowOffset: {width: 10, height: 10},
            shadowOpacity: 1,
            shadowColor: '#7eb9ec',
            shadowRadius: 10,
            borderRadius: 20,
            backgroundColor: 'white',
            width: width * 0.9,
            height: height * 0.8,
            // ...include most of View/Layout styles
          }}>
          <Image style={styles.image} source={require('./assets/image2.jpg')} />
        </Shadow>
      </View>
    </SafeAreaView>
  );
};

export default App;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    resizeMode: 'cover',
  },
});

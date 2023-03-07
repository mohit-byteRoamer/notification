import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenMover from '../components/screenMover';
const SecondPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScreenMover
        screen={'secondPage'}
        firstPageNavigation={() => navigation.navigate('FirstPage')}
        thirdPageNavigation={() => navigation.navigate('ThirdPage')}
        fourthPageNavigation={() => navigation.navigate('FourthPage')}
        fifthPageNavigation={() => navigation.navigate('FifthPage')}
        sixthPageNavigation={() => navigation.navigate('SixthPage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default SecondPage;

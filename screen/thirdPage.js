import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenMover from '../components/screenMover';
const ThirdPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScreenMover
        screen={'thirdPage'}
        firstPageNavigation={() => navigation.navigate('FirstPage')}
        secondPageNavigation={() => navigation.navigate('SecondPage')}
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

export default ThirdPage;

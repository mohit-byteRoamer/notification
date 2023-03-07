import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenMover from '../components/screenMover';
const SixthPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScreenMover
        screen={'sixthPage'}
        firstPageNavigation={() => navigation.navigate('FirstPage')}
        secondPageNavigation={() => navigation.navigate('SecondPage')}
        thirdPageNavigation={() => navigation.navigate('ThirdPage')}
        fourthPageNavigation={() => navigation.navigate('FourthPage')}
        fifthPageNavigation={() => navigation.navigate('FifthPage')}
      
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

export default SixthPage;

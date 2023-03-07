import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenMover from '../components/screenMover';
import {notificationListener} from '../untils/notificationService';
const FirstPage = ({navigation}) => {
  React.useEffect(() => {
    notificationListener(navigation);
    console.log('adda');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <ScreenMover
        screen={'firstPage'}
        secondPageNavigation={() => navigation.navigate('SecondPage')}
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

export default FirstPage;

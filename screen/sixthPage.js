import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ScreenMover from '../components/screenMover';
import MessageContext from '../context/messageContext';
import {useContext} from 'react';
const SixthPage = ({navigation}) => {
  const messageContext = useContext(MessageContext);
  let {message} = messageContext;
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
      <Text style={{fontSize: 20, fontWeight: 800}}>Message :{message}</Text>
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

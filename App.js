import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './untils/rootNavigation';
import FirstPage from './screen/firstPage';
import SecondPage from './screen/secondPage';
import ThirdPage from './screen/thirdPage';
import FourthPage from './screen/fourthPage';
import FifthPage from './screen/fifthPage';
import SixthPage from './screen/sixthPage';
import MessageContext from './context/messageContext';
import messaging from '@react-native-firebase/messaging';
import * as RootNavigation from './untils/rootNavigation';

import {useContext} from 'react';
const Stack = createStackNavigator();
import {
  requestUserPermission,
  notificationListener,
} from './untils/notificationService';
const App = props => {
  const messageContext = useContext(MessageContext);
  let {message, setMessage} = messageContext;
  console.log(message);
  React.useEffect(() => {
    requestUserPermission();

    const notificationListener = async setStateFunction => {
      // eslint-disable-next-line react-hooks/rules-of-hooks

      // messaging().setBackgroundMessageHandler(async remoteMessage => {
      //   console.log('Message handled in the background!', remoteMessage);
      // });
      messaging().onMessage(message => {
        // Get the title of the message and dispatch the SET_MESSAGE action
        const {title} = message.notification;
        console.log('Title ', title);

        setMessage(title);
      });
      messaging().onNotificationOpenedApp(remoteMessage => {
        console.log('click');
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage.notification,
        );
        setMessage(remoteMessage.notification.title);
        RootNavigation.navigate('SixthPage');
      });
      messaging.onMessage(async remoteMessage => {
        console.log('Message from foreground', remoteMessage);
      });
      messaging()
        .getInitialNotification()
        .then(remoteMessage => {
          if (remoteMessage) {
            console.log(
              'Notification caused app to open from quit state:',
              remoteMessage.notification,
            );
          }
        });
    };
    notificationListener();
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="FirstPage" component={FirstPage} />
        <Stack.Screen name="SecondPage" component={SecondPage} />
        <Stack.Screen name="ThirdPage" component={ThirdPage} />
        <Stack.Screen name="FourthPage" component={FourthPage} />
        <Stack.Screen name="FifthPage" component={FifthPage} />
        <Stack.Screen name="SixthPage" component={SixthPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

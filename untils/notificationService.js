import firebase from '@react-native-firebase/app';
import messaging from '@react-native-firebase/messaging';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RootNavigation from './rootNavigation';

// Initialize Firebase app with your project credentials
firebase.initializeApp({
  // your project configuration
});

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFcmToken();
  }
}

const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log('Old FCM Token:', fcmToken);
  if (!fcmToken) {
    try {
      const newToken = await firebase.messaging().getToken();
      if (newToken) {
        console.log('New FCM Token:', newToken);
        await AsyncStorage.setItem('fcmToken', newToken);
      }
    } catch (error) {
      console.log('Error retrieving FCM token:', error);
    }
  }
};

export const notificationListener = async () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  // messaging().setBackgroundMessageHandler(async remoteMessage => {
  //   console.log('Message handled in the background!', remoteMessage);
  // });
  messaging().onMessage(message => {
    // Get the title of the message and dispatch the SET_MESSAGE action
    const {title} = message.notification;
    console.log('Title ', title);

    // setStateFunction(title);
  });
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log('click');
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // setStateFunction(remoteMessage.notification.title);
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

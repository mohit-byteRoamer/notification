import { useContext, useEffect } from 'react';
import { NavigationContext } from '@react-navigation/native';

const useNavigation = () => {
  const navigation = useContext(NavigationContext);

  useEffect(() => {
    // Do something with the navigation object here
  }, [navigation]);

  return navigation;
};

export default useNavigation;

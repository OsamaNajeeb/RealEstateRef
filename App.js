import React, {useEffect} from 'react';
import {Text} from 'react-native';
import BootSplash from 'react-native-bootsplash';

const App = () => {
  useEffect(() => {
    const init = async () => {
      // Simulate a delay or perform async tasks
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3-second delay
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return <Text>My awesome app</Text>;
};

export default App;

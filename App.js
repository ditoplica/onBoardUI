/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import Onboard from './components/Onboard';
import Home from './components/Home';

const App = () => {
  const [showOnboard, setShowOnboard] = useState(true);

  const handleOnboardFinish = () => {
    setShowOnboard(false);
  }
      return (
        <>
      {showOnboard && <Onboard handleDone = {handleOnboardFinish}/>}
      {!showOnboard && <Home />}
      </>
      )
  };

export default App;

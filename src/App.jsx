import React from 'react';

import Todo from './Components/Todo';
import { SettingsProvider } from './Context/Settings';

const App = () => {
  return (
    <SettingsProvider>
      <Todo />
    </SettingsProvider>
  );
};

export default App

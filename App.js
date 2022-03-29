import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/stores';
import {Text, TextInput} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import {NativeBaseProvider} from 'native-base';

const {store} = configureStore;

import Navigation from './src/navigation';

const queryClient = new QueryClient();

//fix text not scale
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps = Text.defaultProps || {};
TextInput.defaultProps.allowFontScaling = false;

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <QueryClientProvider client={queryClient}>
          <Navigation />
        </QueryClientProvider>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;

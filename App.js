import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'

import Loading from './src/sections/components/Loading'
import AppLayout from './src/app'

type Props = {}

export default class App extends Component<Props> {

  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <AppLayout />

        </PersistGate>
      </Provider>
    )
  }
}

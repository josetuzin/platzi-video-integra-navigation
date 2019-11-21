import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import API from './utils/api'
import CategoryList from './src/videos/containers/category-list'
import Player from './src/player/containers/player'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store'
import Loading from './src/sections/components/Loading'

type Props = {}

export default class App extends Component<Props> {
  state = {
    // suggestionList: [],
    // categoryList: []
  }
  async componentDidMount() {

    const suggestionList = await API.getSuggestion(10)

    store.dispatch({
      type: 'SET_SUGGESTION_LIST',
      payload: {
        suggestionList
      }
    })

    const categoryList = await API.getMovies()
    // esto luego se va al reducer (reducer/videos.js) y va a buscar alguien que
    // empiece a escuchar las acciones (type) y pueda hacer algo con eso
    // entonces en el reducer valido el action.type
    store.dispatch({
      type: 'SET_CATEGORY_LIST',
      payload: {
        categoryList
      }
    })
  }
  render() {
    return (
      <Provider store={store}>
        <PersistGate
          loading={<Loading />}
          persistor={persistor}
        >
          <Home>
            <Header />
            <Player />
            <CategoryList />
            <SuggestionList />
          </Home>
        </PersistGate>
      </Provider>
    )
  }
}

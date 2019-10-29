import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

import Home from './src/screens/containers/home'
import Header from './src/sections/components/header'
import SuggestionList from './src/videos/containers/suggestion-list'
import CategoryList from './src/videos/containers/category-list'
import API from './utils/api'
import Video from 'react-native-video'

type Props = {}
export default class App extends Component<Props> {
  state = {
    suggestionList: [],
    categoryList: []
  }
  async componentDidMount(){
    const movies = await API.getSuggestion(10)
    const categories = await API.getMovies()
    console.log(movies)
    console.log(categories)
    this.setState({
      suggestionList: movies,
      categoryList: categories,
    })
  }
  render(){
    return (
      <Home>
        <Header/>  
        <View style={{
              flex: 1,
              height: 100
            }}>
          <Video 
            source={{uri: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0
            }}
            resizeMode="contain"
          />
        </View>
        <Text>Buscador</Text>
        <Text>Categorías</Text>
        <CategoryList 
          list={this.state.categoryList}
        />
        <SuggestionList 
          list={this.state.suggestionList}
        />
      </Home>
    )
  }
}

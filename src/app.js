import React, { Component } from 'react'
import { connect } from 'react-redux'

import API from '../utils/api'
import Home from './screens/containers/home'
import Header from './sections/components/header'
import SuggestionList from './videos/containers/suggestion-list'
import CategoryList from './videos/containers/category-list'
import Movie from './screens/containers/movie'

class AppLayout extends Component {
    async componentDidMount() {

        const suggestionList = await API.getSuggestion(10)

        this.props.dispatch({
            type: 'SET_SUGGESTION_LIST',
            payload: {
                suggestionList
            }
        })

        const categoryList = await API.getMovies()
        // esto luego se va al reducer (reducer/videos.js) y va a buscar alguien que
        // empiece a escuchar las acciones (type) y pueda hacer algo con eso
        // entonces en el reducer valido el action.type
        this.props.dispatch({
            type: 'SET_CATEGORY_LIST',
            payload: {
                categoryList
            }
        })
    }

    render() {
        if (this.props.selectedMovie) {
            return <Movie />
        }
        return (
            <Home>
                <Header />
                <CategoryList />
                <SuggestionList />
            </Home >
        )
    }
}

function mapStateToProps(state) {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(AppLayout)


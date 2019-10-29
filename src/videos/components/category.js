import React from 'react'

import {
    View,
    Text,
    ImageBackground,
    StyleSheet    
} from 'react-native'
import { whileStatement } from '@babel/types'

function Category(props) {
    return (
        <ImageBackground
            style={styles.wrapper}
            source={{ 
                uri: props.background_image
            }}
        >
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',

    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, .75)',
        textShadowOffset: {
            width: 4,
            height: 4
        },
        textShadowRadius: 5, // de 1 a 10 en android
    }
})

export default Category
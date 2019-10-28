import React from 'react'

import {
    Text,
    Image,
    View,
    StyleSheet
} from 'react-native'

function Suggestion(props) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Image 
                    style={styles.cover}
                    //source={require('../../../assets/logo.png')}
                    source={{
                        uri: props.medium_cover_image
                    }}
                />
                <View style={styles.genre}>
                    <Text style={styles.genreText}>{props.genres[0  ]}</Text>
                </View>
            </View>
            <View style={styles.right}>
                <Text style={styles.titulo}>{props.title}</Text>
                <Text style={styles.year}>{props.year}</Text>
                <Text style={styles.rating}>{props.rating}</Text>
            </View>    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    genre: {
        position: 'absolute',
        left: 0,
        top: 0,
        backgroundColor: 'black'
    },
    genreText: {
        color: 'white',
        fontSize: 11,
        paddingVertical: 5,
        paddingHorizontal: 7,
    },
    cover: {
        height: 150,
        width: 100,
        resizeMode: 'contain'
    },
    left: {

    },
    right: {
        paddingLeft: 10,
        justifyContent: 'space-between'
    },
    titulo: {
        fontSize: 18,
        color: '#44546b'
    },
    year: {
        backgroundColor: '#70b124',
        paddingVertical: 4,
        paddingHorizontal: 6,
        color: 'white',
        fontSize: 11,
        borderRadius: 5,
        overflow: 'hidden', // para que no se pegue a los bordes
        alignSelf: 'flex-start', // toma el ancho del texto

    },
    rating: {
        color: '#6b6b6b',
        fontSize: 14,
        fontWeight: 'bold'
    }

})

export default Suggestion
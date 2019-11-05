import React, { Component } from 'react'
import Video from 'react-native-video'
import {
    StyleSheet,
    ActivityIndicator,
    Text
} from 'react-native'
import Layout from '../components/layout'
import ControlLayout from '../components/control-layout'
import PlayPause from '../components/play-pause'


class Player extends Component {
    state = {
        loading: true,
        paused: true,
    }
    onBuffer = ({ isBuffering }) => {
        this.setState({
            loading: isBuffering
        })
    }

    onLoad = () => {
        this.setState({
            loading: false
        })
    }

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    }

    render () {
        return (
            <Layout 
                loading={this.state.loading}
                video={
                    <Video 
                    source={{uri: 'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4'}}
                    style={styles.video}
                    resizeMode="contain"
                    onBuffer={this.onBuffer}
                    onLoad={this.onLoad}
                    paused={this.state.paused}
                    />
                }
                loader={
                    <ActivityIndicator color="red"/>
                }
                controls={
                    <ControlLayout>
                        <PlayPause 
                            onPress={this.playPause}
                            ppaused={this.state.paused}
                        />
                        <Text>Progressbar |</Text>
                        <Text>Time left |</Text>
                        <Text>Full screen |</Text>
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }
})

export default Player
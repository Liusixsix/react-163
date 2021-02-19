import React, { memo, useEffect, useRef } from 'react'
import videojs from 'video.js'
import "video.js/dist/video-js.css";

interface Iprops{
    src:string
    height?:number
    width?:number
}


const VideoPlayer:React.FC<Iprops> = (props)=>{

    const {src} = props
    const videoRef = useRef(null)
  

    useEffect(()=>{
        const player = videojs(videoRef.current,{
            controls: true,
            preload: "auto",
            fluid: true
        })
        player.src({src})

        return ()=>{
            player&&player.dispose()
        }
    })

    return (
        <video ref={videoRef} className="video-js" />
    )
}

export default memo(VideoPlayer)
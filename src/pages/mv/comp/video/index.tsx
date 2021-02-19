import React, { memo } from 'react'
import {Button} from 'antd'
import videojs from 'video.js'

import {VideoWrap,Play} from './style'

import { useGetMvUrl } from '@/hook/useGetMvUrl'
import VideoPlayer from '@/components/VideoPlayer'

interface Iprops{
    title:string
    author:string
    id:number
}


const Video:React.FC<Iprops> = (props)=>{

    const {title,author,id} = props

    const url = useGetMvUrl(id)
    if(!url) return null

    return (
        <VideoWrap>
            <div className="header">
                <h2 className='title'>{title}</h2> 
                <Button type='link'>{author}</Button>
            </div>
           <Play>
               <VideoPlayer src={url}></VideoPlayer>
           </Play>
       
        </VideoWrap>
    )
}

export default memo(Video)
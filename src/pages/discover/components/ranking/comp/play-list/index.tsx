import React, { memo } from 'react'
import {PlayListWrapper,HeaderWrapper} from './style'


export default memo(function PlayList() {
    return (
        <PlayListWrapper>
            <HeaderWrapper>
                <div className='cover'>
                    <img src="http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg?param=150y150" alt=""/>
                </div>
            </HeaderWrapper>
        </PlayListWrapper>
    )
})

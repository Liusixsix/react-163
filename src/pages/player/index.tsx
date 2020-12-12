import React, { memo } from 'react'
import { SongDetailWrapper, SongLeft, SongRight } from './style'
import SongInfo from './comp/song-info'
import SongComment from './comp/song-comment'

export default memo(function Player(props) {
    return (
        <SongDetailWrapper>
            <div className='content w980'>
                <SongLeft>
                    <SongInfo></SongInfo>
                    <SongComment></SongComment>
                </SongLeft>
                <SongRight>
                <h2>SongInclude 包含音乐</h2>
          <h2>SongRelevant 相关音乐</h2>
          <h2>客户端下载</h2>
                </SongRight>
            </div>
        </SongDetailWrapper>
    )
})

import React, { memo } from 'react'
import { SongDetailWrapper, SongLeft, SongRight } from './style'
import SongInfo from './comp/song-info'
export default memo(function Player() {
    return (
        <SongDetailWrapper>
            <div className='content w980'>
                <SongLeft>
                    <SongInfo></SongInfo>
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

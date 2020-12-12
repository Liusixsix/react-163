import React, { memo } from 'react'
import {RcmHeaderWrapper,RcmHeaderLeft} from './style'
export default memo(function ThemeHeader(props:{title:string}) {
    const title = props.title
    return (
        <RcmHeaderWrapper>
            <RcmHeaderLeft>
            <h2 className="hot-title">
                <a href="/discover/recommend" className="no-link hot-text">
                    {title}
                </a>
                </h2>
                <span>共170851条评论</span>
            </RcmHeaderLeft>
        </RcmHeaderWrapper>
    )
})

import React, { memo } from 'react'
import {CommentWrapper,PaginationWrap} from './style'
import {Button} from 'antd'
import { formatMsgTime } from '@/utils'
import { Pagination } from 'antd';
interface comment{
    content:string
    time:number
    user:any
    
}

interface Iprops{
    comments:comment[]
    total:number
    current:number
    handleCurrentChange:(page:number)=>void
}

const Comment:React.FC<Iprops>  = (props)=>{
    const {comments,total,current,handleCurrentChange} = props
    return (
        <CommentWrapper>
            <div className="header">最新评论（{total}）</div>
            {
                comments && comments.map((item,index)=>{
                    return (
                        <div className='comment-item' key={item.time}>
                        <div className='cover'><img src={`${item.user.avatarUrl}?param=50y50`} alt=""/></div>
                        <div className='content'>
                            <div>
                                <Button className='name' type='link'>{item.user.nickname}</Button>
                                <span className='text'>： {item.content}</span>
                            </div>
                            <div className='timer'>{formatMsgTime(item.time)}</div>
                        </div>
                    </div>
                    )
                })
            }
            <PaginationWrap>
                 <Pagination  defaultCurrent={1}
                  current={current}
                   pageSize={20} 
                   total={total}
                    showSizeChanger={false} 
                    onChange={handleCurrentChange}
                    />
            </PaginationWrap>
        </CommentWrapper>
    )
}

export default memo(Comment)
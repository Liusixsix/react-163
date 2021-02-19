import React, { memo, useEffect, useState } from 'react'
import Video from './comp/video'
import { getMvDetail ,commentMv, simiMv} from '@/service/mv'
import ThemeHeader from "@/components/theme-header";
import Comment from './comp/comment'
import {MvWrap,CommentWrap,Recommend } from './style'
const Mv:React.FC = (props:any)=>{
    const {match,history} = props
    
    const [mvData,setMvData] = useState<any>({})

    const [comments,setComments] = useState([])
    const [commentsTotal,setCommentsTotal] = useState(0)
    const [current,setCurrent] = useState(1)
    const [mvs,setmvs] = useState([])
    const id = match.params.id

    useEffect(()=>{
        if(!id){
            history.go(-1) 
            return
        }
        getData(id)
        getsimiMv(id)
    },[id])
 
    useEffect(()=>{
        getMvComment(id,current)
    },[id,current])

    const getData = async (id)=>{
        const {data} = await getMvDetail(id) 
        setMvData(data)
    }

    const getMvComment = async(id,current)=>{
        const res:any = await commentMv(id,current)
        setComments(res.comments)
        setCommentsTotal(res.total)
    }

   const getsimiMv =async (id)=>{
        const res:any = await simiMv(id)
        setmvs(res.mvs)
        console.log(res.mvs)
   }

    const handleCurrentChange = (page)=>{
        setCurrent(page)
    }

    const {name='',artistName='',desc='',playCount='',publishTime=''} = mvData

    return(
        <MvWrap className="w980">
            <div className="left">
                <Video title={name} author={artistName} id={id}/>
                <CommentWrap>
                    <ThemeHeader title='评论'></ThemeHeader>
                 <Comment comments={comments} total={commentsTotal} current={current} handleCurrentChange={handleCurrentChange}></Comment>
                </CommentWrap>
            </div>

            <div className="right">
                <div>
                    <div className='title'>MV简介</div>
                    <p>发布时间：{publishTime}</p>
                    <p>播放次数：{playCount}次</p>
                    <div className='info'>{desc}</div>
                </div>
                <div>
                <div className='title'>相关推荐</div>
                    <Recommend>
                        {
                            mvs&&mvs.map((item)=>{
                                return (
                                    <div className='recommend-item' key={item.id}>
                                        <div className="cover">
                                            <a href={`/mv/${item.id}`}>
                                                <img src={item.cover+'?param=100y60'} alt=""/>
                                            </a>
                                        </div>
                                        <div className='detail text-nowrap'>
                                            <div className='item-name'>
                                                 <a href={`/mv/${item.id}`}>{item.name}</a>
                                            </div>
                                            <div className='item-timer'>{item.duration}</div>
                                            <div className='item-author'>by {item.artistName}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        
                    </Recommend>
                </div>
            </div>
        </MvWrap>
    )
}


export default memo(Mv)
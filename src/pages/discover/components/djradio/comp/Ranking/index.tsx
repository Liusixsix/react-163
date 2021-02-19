import React, { memo, useEffect, useMemo, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {Pagination} from 'antd'
import { getRankinfAction } from '../../store/action'
import MyHeader from '../my-header'
import {RightRio,RankingItemWrap,RankingListWrap,PageWrap} from './style'

type itemType = 'new'|'hot'


const RankingItem = (list)=>{
    return (
        <RankingListWrap>
            {
                list&&list.map(item=>{
                    return <RankingItemWrap key={item.id}>
                        <div className='pic'>
                            <img src={item.picUrl+'?param=200y200'} alt=""/>
                        </div>
                        <div className='cnt'>
                            <div className="title"><a href="">{item.rcmdtext}</a></div>
                            <div className='name'>{item.name}</div>
                            <div className='count'>
                                <span>共{item.lastRank}期</span>
                                <span>订阅{item.subCount}次</span>
                            </div>
                        </div>
                    </RankingItemWrap>
                })
            }
        </RankingListWrap>
    )
}


const Ranking:React.FC = ()=>{

    const dispatch = useDispatch()
    const { ranking }= useSelector((state:any)=>({
        ranking:state.getIn(['djradio','ranking']),
    }),shallowEqual) 
    const [type,setType] = useState<itemType>('new')

    const hanldeClickType = (e:any,type:itemType)=>{
        e.preventDefault()
        setType(type)
    }

    const [page,setPage] = useState(1)


    useEffect(()=>{
        dispatch(getRankinfAction(type,(page-1)*20,20))
    },[dispatch,type,page])


    const RightNode = ()=>{
        return (
            <RightRio>
                <a onClick={e=>hanldeClickType(e,'new')} className={type==='new'?'action':''}>上升最快</a>
                <span> 丨</span>
                <a onClick={e=>hanldeClickType(e,'hot')} className={type==='hot'?'action':''}>最热电台</a>
            </RightRio>
        )
    }



    return (
        <div>
            <MyHeader title='电台排行榜' right={RightNode()}></MyHeader>
            {RankingItem(ranking)}
            <PageWrap >
             <Pagination defaultCurrent={page} total={500} showSizeChanger={false} onChange={(page)=>setPage(page)}></Pagination>
            </PageWrap>
        </div>
    )
}

export default memo(Ranking)
import React, { memo, useEffect ,useState} from 'react'
import SongsItem from '@/components/songs-item'
import HotHeader from '../recommend/components/hot/hot-header'
import {SongsWrapper} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsAction } from './store/action'
import { Pagination } from 'antd'
import { useHistory } from 'react-router-dom'

const pageSize = 35

export default memo(function Songs() {

    const history = useHistory()

    const dispatch = useDispatch()
    const {songs,total} = useSelector((state:any)=>({
        songs:state.getIn(['songs','songs']),
        total:state.getIn(['songs','total'])
    }))

    const [page,setPage] = useState(1)

    
    useEffect(()=>{
        dispatch(getSongsAction(pageSize, (page -1) * pageSize))
        window.scrollTo({top:0})
    },[dispatch,page])


    const handleClickItem = (e:MouseEvent,item)=>{
        e.preventDefault()
        history.push(`/playlist`,{
            id:item.id,
            coverImg:item.coverImgUrl,
            name:item.name
        })
    }

    return (
        <SongsWrapper className='w980'>
            <HotHeader title='歌单'></HotHeader>

            <div className='songs-wrap'>
                {
                    songs.map(item=>{
                        return (
                            <SongsItem 
                                key={item.id}
                                name={item.name}
                                playCount={item.playCount}
                                coverImgUrl={item.coverImgUrl}
                                nickname={item?.creator?.nickname}
                                handleClickItem={(e)=>handleClickItem(e,item)}
                             ></SongsItem>
                        )
                    })
                }           
            </div>
            <div style={{textAlign:'center'}}>
                <Pagination 
                current={page}
                total={total} 
                pageSize={pageSize} 
                showSizeChanger={false}
                onChange={(page)=>setPage(page)}
                ></Pagination>
            </div>
           
        </SongsWrapper>
    )
})

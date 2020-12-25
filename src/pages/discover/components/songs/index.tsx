import React, { memo, useEffect ,useState} from 'react'
import SongsItem from '@/components/songs-item'
import HotHeader from '../recommend/components/hot/hot-header'
import {SongsWrapper} from './style'
import { useDispatch, useSelector } from 'react-redux'
import { getSongsAction } from './store/action'
import { Pagination } from 'antd'

const pageSize = 35

export default memo(function Songs() {

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

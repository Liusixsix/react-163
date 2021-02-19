import { parseSearch } from '@/utils'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Cate from './comp/cate'
import Recomment from './comp/Recomment'
import Ranking from './comp/Ranking'
import { getCateAction, getRecommnetAction } from './store/action'

import { DiradioWrap } from './style'


export default function Diradio() {
    const history = useHistory()
    const dispatch = useDispatch()
    const {search} = history.location

    const [id,setId] = useState<any>(2)

    useEffect(()=>{
        dispatch(getCateAction())
    },[dispatch,getCateAction])


    useEffect(()=>{
        const searchParams = parseSearch(search)
        const id = searchParams.get('id') || 3
        setId(id)
        dispatch(getRecommnetAction(id))
    },[search])


    // const handleClickCateItem  =  useCallback(()=>{
    //     history.push({
    //         pathname:'/discover/djradio',
    //         search:`?id=${id}`
    //     })
    // },[])

    const handleClickCateItem = (id)=>{
        history.push({
            pathname:'/discover/djradio',
            search:`?id=${id}`
        })
    }



    return (
        <DiradioWrap className='w980'>
            <Cate id={id} handleClickCateItem={handleClickCateItem}></Cate>
           <Recomment></Recomment>
           <Ranking></Ranking>
        </DiradioWrap>
    )
}

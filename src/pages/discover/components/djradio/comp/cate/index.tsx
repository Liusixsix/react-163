import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import {CateWrap,CateItem} from './style'

interface Iprops{
    handleClickCateItem:(id)=>void
    id:any
}

const Cate:React.FC<Iprops> = (props)=>{

    const {handleClickCateItem,id} = props
    const {cate,cateId}= useSelector((state:any)=>({
        cate:state.getIn(['djradio','cate']),
        cateId:state.getIn(['djradio','cateId'])
    }))
    
    return (
        <CateWrap>
          {
              cate.map((item)=>{
                  return <CateItem className={id==item.id?'action':''} bg={item.picWebUrl} key={item.id} onClick={()=>handleClickCateItem(item.id)}>
                            <div className='icon'></div>
                            <p className='name'>{item.name}</p>
                  </CateItem>
              })
          }
        </CateWrap>
    )
}

export default memo(Cate)
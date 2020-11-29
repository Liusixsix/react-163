import React, { memo, useEffect } from "react";
import { Link } from 'react-router-dom'
import { HotWrap,  ItemWrap,ListWrap,ListItem } from "./style";
import HotHeader from './hot-header'
import { useDispatch, useSelector } from "react-redux";
import {getHotListAction} from '../../store/action'
const itemList: string[] = ["华语", "流行", "摇滚", "民谣", "电子"];

const Hot: React.FC = () => {

  const dispatch = useDispatch()
  const HotList = useSelector((state:any)=>state.recommend.hotList)
  useEffect(()=>{
    dispatch(getHotListAction())
  },[dispatch])

  return (
    <HotWrap>
      <HotHeader title='热门推荐'>
        <ItemWrap>
            {itemList.map((item) => {
              return (
                <li key={item}>
                  <a href="/">{item}</a>
                  <span className="line">|</span>
                </li>
              );
            })}
          </ItemWrap>
        </HotHeader>
    

      <ListWrap>
        {
          HotList.map((item:any)=>{
              return (
                <ListItem key={item.id}>

                      <div className='hot-item'>
                      <img src={`${item.picUrl}?param=140y140`} alt=""/>
                      <Link to="/" className='mask'> </Link>
                        <div className='bottom msk'>
                           <div><span className='icon-headset'></span>
                            <span className='count'>33万</span></div>
                            <div><span className='play'></span></div>
                        </div>
                      </div>

                <div className='title'>{item.name}</div>
                </ListItem>
              )
          })
        }
        
      </ListWrap>

    </HotWrap>
  );
};
export default memo(Hot) ;

import React, { useMemo,createContext, PureComponent, useContext, useReducer, useState,memo, useCallback } from "react";
import Swiper from "./components/swiper";
import { ListWrap, WrapLeft, WrapRight } from "./style";
import Hot from "./components/hot";
import NewDisc from './components/new-disc'
import Ranking from './components/ranking'
import Right from './components/Right'

export interface banner {
  imageUrl: string;
}



const Recommend: React.FC = (props:any) => {
  return (
    <>
      <Swiper></Swiper>
      <ListWrap>
        <WrapLeft>
          {/* 推荐 */}
          <Hot></Hot>
          <NewDisc></NewDisc>
          <Ranking></Ranking>
        </WrapLeft>
        <WrapRight>
          <Right></Right>
        </WrapRight>
      </ListWrap>
     
    </>
  );
};

export default Recommend;

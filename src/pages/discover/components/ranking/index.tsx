import React, { memo, useEffect } from "react";
import {
  RankingLeft,
  RankingWrap,
  RankingRight,
  RankListWrapper,
} from "./style";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTopListAction } from "./store/action";
import { RankListWrap } from "../recommend/components/ranking/style";
import PlayList from './comp/play-list'

interface Iprops {
  title: string;
  data: any[];
}
const RankingList: React.FC<Iprops> = (props) => {
  const { data } = props;
  return (
    <RankListWrapper>
      <div className="header">
        <h3>{props.title}</h3>
      </div>
      <ul>
        {data.map((item: any) => {
          return (
            <li key={item.id}>
              <Link to="/" className="item ">
                <div className="head">
                  <img src={item.coverImgUrl + "?param=44x44"} alt="" />
                </div>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="tag">{item.updateFrequency}</div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </RankListWrapper>
  );

    

};

const Ranking: React.FC = () => {
  const dispatch = useDispatch();
  const topList = useSelector((state: any) => state.getIn(['ranking','topList']));

  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch]);

  return (
    <RankingWrap>
      <div className="w980 center">
        <RankingLeft>
          <RankingList title="云音乐热榜" data={topList.slice(0, 4)} />
          <RankingList
            title="全球媒体榜"
            data={topList.slice(4, topList.length)}
          />
        </RankingLeft>
        <RankingRight>
            <PlayList />
        </RankingRight>
      </div>
    </RankingWrap>
  );
};

export default memo(Ranking);

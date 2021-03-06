import { getSongDetailAction } from "@/pages/player/store/action";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopListAction } from "../../store/action";
import Header from "../hot/hot-header";
import { RankWrap, RankListWrap, TopRankingWrapper, OperWrap } from "./style";

const ListItem = memo((props: any) => {
  const { info } = props;
  const { tracks = [] } = info;

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <TopRankingWrapper>
      <div className="top">
        <div className="cver">
          <img src={info.coverImgUrl} alt="" />
        </div>
        <div className="tit">
          <Link to="/">
            <h3>{info.name}</h3>
          </Link>
          <div className="btn">
            <span className="play sprite_02"></span>
            <span className="Collection sprite_02"></span>
          </div>
        </div>
      </div>
      {tracks &&
        tracks.slice(0, 10).map((item: any, index: number) => {
          return (
            <div className="item" key={item.id}>
              <span className={index <= 2 ? "index active" : "index"}>
                {index + 1}
              </span>
              <Link to="/" className="item-name text-nowrap">
                {item.name}
              </Link>
              <OperWrap className="OperWrap">
                <span
                  className="sprite_02 btn play"
                  onClick={(e) => playMusic(item)}
                ></span>
                <span className="sprite_icon2 btn addto"></span>
                <span className="sprite_02 btn favourite"></span>
              </OperWrap>
            </div>
          );
        })}
      <div className="bottom">
        <Link to="/" className="item-name">
          查看更多{">"}{" "}
        </Link>
      </div>
    </TopRankingWrapper>
  );
});

const idx = [19723756, 3779629, 2884035];

export default function Ranking() {
  const dispatch = useDispatch();

  const { upRanking = {}, originRanking = {}, newRanking = {} } = useSelector(
    (state: any) => ({
      upRanking: state.getIn(["recommend", "upRanking"]),
      originRanking: state.getIn(["recommend", "originRanking"]),
      newRanking: state.getIn(["recommend", "newRanking"]),
    })
  );

  useEffect(() => {
    idx.forEach((id: number) => {
      dispatch(getTopListAction(id));
    });
  }, [dispatch]);

  return (
    <RankWrap>
      <Header title="榜单"></Header>
      <RankListWrap>
        <ListItem info={upRanking}></ListItem>
        <ListItem info={newRanking}></ListItem>
        <ListItem info={originRanking}></ListItem>
      </RankListWrap>
    </RankWrap>
  );
}

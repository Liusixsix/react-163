import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getArtistAction } from "../../store/action";
import {
  RightWrapper,
  LoginWrapper,
  SettlementSingerWrapper,
  AnchorWrapper,
} from "./style";

const LoginWrap = () => {
  return (
    <LoginWrapper className="sprite_02">
      <p className="note">
        登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机
      </p>
      <a href="/" className="login-btn sprite_02">
        用户登录
      </a>
    </LoginWrapper>
  );
};

const SettlementSinger = (props: any) => {
  const { artist = [] } = props;
  return (
    <SettlementSingerWrapper>
      <div className="header">
        <h3>入驻歌手</h3>
        <Link to="/">查看全部 {">"}</Link>
      </div>
      <ul className="center">
        {artist.map((item: any) => {
          return (
            <li key={item.id}>
              <Link to="/" className="item">
                <div className="head">
                  <img src={item.picUrl + "?param=62y62"} alt="" />
                </div>
                <div className="ifo">
                  <h4>{item.name}</h4>
                  <p>流行音乐</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="apply-btn">申请成为网易云音乐人</div>
    </SettlementSingerWrapper>
  );
};

const Anchor = () => {
  return (
    <AnchorWrapper>
      <div className="header">
        <h3>热门主播</h3>
      </div>
      <ul>
          <li>
              <div className="head">
                  <img src="http://p2.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg?param=40y40" alt=""/>
              </div>
              <div className='info'>
                  <Link to='/'>陈丽</Link>
                  <p>心理学家、美食家陈立教授</p>
              </div>
          </li>
      </ul>
    </AnchorWrapper>
  );
};

export default memo(function Right() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(getArtistAction());
    }, [dispatch]);
  
    const artist = useSelector((state: any) => state.recommend.artist);
    return (
      <RightWrapper>
        <LoginWrap></LoginWrap>
        <SettlementSinger artist={artist} />
        <Anchor />
      </RightWrapper>
    );
  })

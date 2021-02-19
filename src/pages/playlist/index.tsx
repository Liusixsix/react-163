import { getSongsInfo } from "@/service/songs";
import React, { memo, useEffect, useState } from "react";
import { PlayListWrapper, PalyListLeft } from "./style";
import { PlayCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSongDetailAction } from "../player/store/action";

export default memo(function PlayList(props: any) {
  const { id, coverImg, name } = props?.location?.state;

  const [playlist, setPlaylist] = useState([]);

const dispatch = useDispatch()

  useEffect(() => {
    getSongsInfo(id).then((res: any) => {
      setPlaylist(res.playlists);
    });
  }, [id]);

  const handleClickItem = (item)=>{
      dispatch(getSongDetailAction(item.id))
  }

  return (
    <PlayListWrapper className="w980">
      <PalyListLeft>
        <div className="header">
          <div className="header-img-cover">
            <img src={coverImg + "?param=200y200"} alt="" />
          </div>
          <h3>{name}</h3>
        </div>

        <h2>歌曲列表</h2>
        <div className="play-list">
          <div className="title">
            <div className="index"></div>
            <div className="name">歌曲标题</div>
          </div>
          <div className='list-content'>
            {playlist.map((item, index) => {
              return (
                <div key={item.id} className='item'>
                  <span className='inx'>{index + 1}</span>
                  <PlayCircleOutlined onClick={()=>handleClickItem(item)} />
                  <Link to='/'>{item.name}</Link>
                </div>
              );
            })}
          </div>
        </div>
      </PalyListLeft>
    </PlayListWrapper>
  );
});

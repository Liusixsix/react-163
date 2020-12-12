import React, { memo, useEffect } from "react";
import { SongCommentWrapper, WonderfulWrapper } from "./style";
import ThemeHeader from "@/components/theme-header";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { Comment, Avatar } from "antd";
import { getHotCommentAction } from "../../store/action";
import { useHistory } from "react-router-dom";
export default memo(function SongComment(props: any) {
  const history: any = useHistory();

  const dispatch = useDispatch();
  const { hotComments, currentSongId } = useSelector(
    (state: any) => ({
      hotComments: state.getIn(["play", "hotComments"]),
      currentSongId: state.getIn(["play", "currentSong", "id"]),
    }),
    shallowEqual
  );

  useEffect(() => {
    let id = history.location.state?.id || currentSongId;
    dispatch(getHotCommentAction(id));
  }, [currentSongId, dispatch, history.location.state]);

  return (
    <SongCommentWrapper>
      <ThemeHeader title={"评论"} />
      <WonderfulWrapper>
        <div className="header-comment">精彩评论</div>
        {hotComments &&
          hotComments.map((item, index) => {
            return (
              <Comment
                key={item.commentId}
                author={item.user.nickname}
                avatar={<Avatar src={item.user.avatarUrl} alt="Han Solo" />}
                content={<p>{item.content}</p>}
              ></Comment>
            );
          })}
      </WonderfulWrapper>
    </SongCommentWrapper>
  );
});

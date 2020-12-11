import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { LyricContentWrapper } from "./style";
import {scrollTo} from '@/utils'
export default memo(function LyricContent() {
  // redux hook
  const { lyricList, currentLyricIndex } = useSelector(
    (state: any) => ({
      lyricList: state.getIn(["play", "lyricList"]),
      currentLyricIndex: state.getIn(["play", "currentLyricIndex"]),
    }),
    shallowEqual
  );

  const panelRef = useRef<HTMLDivElement>();

  useEffect(() => {
    if(currentLyricIndex>0 && currentLyricIndex < 3) return
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300)
  }, [currentLyricIndex]);

  return (
    <LyricContentWrapper ref={panelRef}>
      <div className="lyric-content">
        {lyricList &&
          lyricList.map((item, index) => {
            return (
              <div
                key={item.totalTime}
                className={
                  "lyric-item " + (currentLyricIndex === index ? "active" : "")
                }
              >
                {item.content}
              </div>
            );
          })}
      </div>
    </LyricContentWrapper>
  );
});

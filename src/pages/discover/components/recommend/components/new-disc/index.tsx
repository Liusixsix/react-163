import React, { useEffect, useMemo, useRef } from "react";
import Header from "../hot/hot-header";
import { SwiperWrap, Inner, Slider, SliderItem } from "./style";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getNewEstAction } from "../../store/action";

interface Iprops {
  picUrl: string;
  name: string;
  author: string;
}
const SwiperItem: React.FC<Iprops> = (props) => {
  const { picUrl, name, author } = props;
  return (
    <SliderItem>
      <div className="album-image">
        <img src={picUrl + "?param=100x100"} alt="" />
        <a href="/" className="cover img_cover"></a>
      </div>
      <div className="album-name text-nowrap">{author}</div>
      <div className="artist text-nowrap">{name}</div>
    </SliderItem>
  );
};

const NewDisc = () => {
  const dispatch = useDispatch();
  const NewDiscList = useSelector((state: any) => state.recommend.newEst);
  const SwiperRef = useRef<any>()

  useEffect(() => {
    dispatch(getNewEstAction());
  }, [dispatch]);

  return (
    <>
      <Header title="新碟上架"></Header>
      <SwiperWrap>
        <Inner>
          <Carousel dots={false} ref={SwiperRef}>
            {[0,1].map((item, index) => {
              return (
                <Slider key={item}>
                  {NewDiscList &&
                    NewDiscList.slice(item * 5, (item + 1) * 5).map(
                      (cItem: any) => {
                        return (
                          <SwiperItem
                            key={cItem.picId}
                            picUrl={cItem.picUrl}
                            name={cItem.name}
                            author={cItem.artist.name}
                          ></SwiperItem>
                        );
                      }
                    )}
                </Slider>
              );
            })}
          </Carousel>
        </Inner>
        <div className="arrow sprite_02 arrow-left" onClick={e=>SwiperRef.current.prev()}></div>
        <div className="arrow sprite_02 arrow-right" onClick={e=>SwiperRef.current.next()}></div>
      </SwiperWrap>
    </>
  );
};
export default NewDisc;

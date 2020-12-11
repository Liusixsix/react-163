import React, { useRef, useState, useCallback, memo, useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTopBannersAction } from "../../store/action";
import { Carousel } from "antd";
import "./index.scss";
import { banner } from "../..";




const Swiper: React.FC = memo((props) => {

  const bannerRef = useRef<HTMLDivElement | any>();
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const dispatch = useDispatch()
  const topBanners:banner[] = useSelector((state:any)=>state.getIn(['recommend','topBanners']))

  useEffect(() => {
    dispatch(getTopBannersAction())
  }, [dispatch]);


  const bannerChange = useCallback((from, to) => {
    setActiveIndex(to);
  }, []);
  
  const bgImage = topBanners && 
                  topBanners[activeIndex] &&
                  topBanners[activeIndex].imageUrl + '?imageView&blur=40x20'
  

  return (
    <div style={{background:`url(${bgImage}) center center/6000px`}}>
      <div className="swiper-warp w980 ">
        <div className="slider">
          <Carousel
            ref={bannerRef}
            autoplay
            effect="fade"
            beforeChange={bannerChange}
          >
            {topBanners &&
              topBanners.map((item, index) => {
                return (
                  <div className="slider-item" key={index}>
                    <img src={item.imageUrl}></img>
                  </div>
                );
              })}
          </Carousel>
        </div>
        <div className="down">
          <a href="https://music.163.com/#/download"></a>
        </div>

        <div className="BannerControl">
          <button
            className="btn"
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className="btn"
            onClick={() => bannerRef.current.next()}
          ></button>
        </div>
      </div>
    </div>
  );
});
export default memo(Swiper);

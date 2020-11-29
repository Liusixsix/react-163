import styled from "styled-components";

export const SwiperWrap = styled.div`
  position: relative;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  height: 186px;
  margin: 20px 0px 37px;
  border: 1px solid rgb(211, 211, 211);
  background-color: rgb(245, 245, 245);
  position: relative;
  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    cursor: pointer;
    background-position-y: -76px;
    &-left {
      left: 5px;
      background-position-x: -261px;
    }
    &-right {
      right: 5px;
      background-position-x: -294px;
    }
  }
`;

export const Inner = styled.div`
  width: 640px;
  height: 150px;
  /* border: 1px solid red; */
`;

export const Slider = styled.div`
  display: flex !important; 
  justify-content: space-between;
  flex-wrap:wrap;
  &::after{
    content:'';
    height:0;
    width:20%;
  }
`;
export const SliderItem = styled.div`
  width: 118px;
  font-size: 12px;
  margin-top:  15px;
 
  .album-image {
    position: relative;
    height: 100px;
    .cover {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      background-position: 0px -570px;
    }
  }
  .album-name {
    color: rgb(0, 0, 0);
  }
  .artist {
    color: rgb(102, 102, 102);
  }
`;

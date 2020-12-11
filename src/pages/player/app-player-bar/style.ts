import styled from "styled-components";

export const PlayerWrapper = styled.div`
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  height: 53px;
  background-position: 0px 0px;
  background-repeat: repeat;

  .center {
    display: flex;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0px;
    height: 47px;
    align-content: center;
    .btns {
      display: flex;
      height: 100%;
      align-items: center;
      span {
        cursor: pointer;
        width: 28px;
        height: 28px;
      }
      .pre {
        background-position: 0px -130px;
        margin-right: 8px;
        margin-top: 5px;
      }
      
      .next {
        background-position: -80px -130px;
        width: 28px;
        height: 28px;
        margin-right: 8px;
        margin-top: 5px;
      }
    }
  }

  .playlist-enter,.playlist-appear{
    opacity:0;
    transform:scale(0.6);
  }

  .playlist-enter-active,.playlist-appear-active{
    transition: opacity 300ms, transform 300ms;
    opacity: 1;
    transform: scale(1);
  }

  .playlist-exit{
    opacity:1;
    transform:scale(1)；
  }

  .playlist-exit-active {
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 300ms, transform 300ms;
  }
  /* .playlist-exit-done {
    opacity: 0;
  } */

`;

export const PlayBtn = styled.span`
        cursor: pointer;
        background-position: 0 ${(props:{isPlaying:boolean}) => (props.isPlaying ? '-165px' : '-204px')};
        width: 36px !important;
        height: 36px !important;
        margin-right: 8px;
`

export const PlayInfo = styled.div`
  display: flex;
  .image {
    width: 34px;
    height: 35px;
    border-radius: 5px;
    overflow: hidden;
    margin: 6px 15px 0 0;
  }

  .play-detail {
    /* display:flex; */
    /* flex-direction:column; */

    .song-info {
      font-size: 12px;
      width: 100%;
      height: 28px;
      overflow: hidden;
      text-shadow: 0 1px 0 #171717;
      line-height: 28px;
      /* background:red; */
      a {
        text-decoration: none;
      }
      .song-name {
        color: #e8e8e8;
        margin: 0 10px;
      }
      .singer-name {
        color: #9b9b9b;
      }
    }

    .ant-slider {
      width: 493px;
      height: 9px;
      margin-top: -2px;
      z-index: 100;
      .ant-slider-rail,
      .ant-slider-track,
      .ant-slider-step {
        height: 9px;
      }
      .ant-slider-rail {
        background: url(${require("@/assets/image/progress_bar.png")}) 0 0;
      }
      .ant-slider-track {
        background: url(${require("@/assets/image/progress_bar.png")});
        background-position: left -66px;
      }
      .ant-slider-handle {
        width: 20px;
        height: 22px;
        border: 0;
        background: url(${require("@/assets/image/iconall.png")});
        background-position: 0 -250px;
        margin-top: -7px;
      }
    }
  }

  .song-time {
    line-height: 68px;
    color: #a1a1a1;
    margin: 0 30px 0 9px;
    font-size: 12px;
    .total-time {
      color: #797979;
    }
  }
`;

export const Operator = styled.div`
  display: flex;
  position: relative;
  top: 5px;
  .btn {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
  .left {
    display: flex;
    align-items: center;
    .refresh {
      margin: 0 5px;
      cursor: pointer;
      font-size: 17px;
      color: #9f9f9f;
      &:hover {
        color: #ccc;
      }
    }
    .anticon-download {
      cursor: pointer;
      padding: 1px 6px;
      font-size: 19px;
      color: #adadad;
    }
  }
  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -240px;
    .volume {
      background-position: -2px -248px;
    }
    .loop {
      
    }
    .playlist{
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
      font-size:12px;
    }
  }

  .top-volume {
    position: absolute;
    top: -117px;
    left: 65px;
    clear: both;
    width: 32px;
    height: 113px;
    overflow: hidden;
    padding: 10px;
    background-position: 0 -503px;

    .ant-slider-vertical {
      margin: 0;
      .ant-slider-rail {
        background-color: transparent;
      }
      .ant-slider-track {
        background: url(${require("@/assets/image/playbar_sprite.png")}) no-repeat
          0 9999px;
        background-position: -40px bottom;
      }
      .ant-slider-handle {
        border: 0;
        background: url(${require("@/assets/image/iconall.png")});
        background-position: -42px -250px;
      }
      
    }
  }
`;


export const LoopBtn = styled.div`
  background-position: ${(props:{playSequence:number}) => {
        switch (props.playSequence) {
          case 1:
            return '-66px -248px;'
          case 2:
            return '-66px -344px;'
          default:
            return '-3px -344px;'
        }
      }};
`
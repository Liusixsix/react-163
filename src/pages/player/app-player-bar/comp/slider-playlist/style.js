import styled from 'styled-components'


export const SliderPlayListWrap = styled.div`
    position:absolute;
    left:-445%;
    bottom:51px;
    width:986px;
    height:301px;
    border-radius:7px;
    cursor:default;
    background-color:pink;
    z-index:9999;
`

export const SliderPlaylistHeader = styled.header`
    display:flex;
    height:40px;
    background: url(${require('@/assets/image/playlist_bg.png')});
     background-position: 0 0;
     .playlist-header-left{
         width:553px;
         display:flex;
         justify-content:space-between;
         line-height:39px;
         padding:0 10px 0 15px;

         .header-title {
            font-size: 14px;
            font-weight: bold;
            color: #e2e2e2;
         }

         .header-icon {
            padding: 5px;
            line-height: 33px;
            color: #ccc;
            span {
                margin-left: 5px;
            }
            }
     }

     .playlist-header-right{
        display: flex;
        align-items: center;
        width: 432px;
        line-height: 40px;
        color: #fff;
        text-align: center;
        .song-name {
        width: 94%;
        text-align: center;
        }

        .close-window {
        width: 5%;
        cursor: pointer;
        }
     }
`

export const SliderPlaylistMain = styled.div`
    display:flex;
    height: 260px;
    background: url(${require('@/assets/image/playlist_bg.png')});
  background-position: -1014px 0;
  background-repeat: repeat-y;
  .main-playlist {
    width: 555px;
    padding-left: 2px;
    overflow: auto;
    /* 滚动条 */
    ::-webkit-scrollbar-thumb:horizontal {
      /*水平滚动条的样式*/
      width: 4px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
    }
    ::-webkit-scrollbar-track-piece {
      background-color: #1a1a1a; /*滚动条的背景颜色*/
      -webkit-border-radius: 0; /*滚动条的圆角宽度*/
    }
    ::-webkit-scrollbar {
      width: 8px; /*滚动条的宽度*/
      height: 6px; /*滚动条的高度*/
    }
    ::-webkit-scrollbar-thumb:vertical {
      /*垂直滚动条的样式*/
      height: 50px;
      background-color: #9f9f9f;
      -webkit-border-radius: 4px;
      /* outline: 2px solid #000; */
      /* outline-offset: -2px; */
      border: 2px solid #9f9f9f;
    }

    .active {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }
  .main-line {
    width: 6px;
    height: 258px;
    background: #000;
    margin-top: 2px;
  }

`
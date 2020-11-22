import styled from "styled-components";

export const SearchWrap = styled.div`
  width: 237px;
  position: absolute;
  top: 36px;
  background: #fff;
  z-index: 999;
  border: 1px solid rgb(190, 190, 190);
  border-radius: 4px;
  background: rgb(255, 255, 255);
  box-shadow: rgb(85, 85, 85) 0px 4px 7px;
  text-shadow: rgba(255, 255, 255, 0.9) 0px 1px 0px;
  .content {
    border: 1px solid rgb(183, 183, 187);
    display: flex;
    font-size: 12px;
    .zuo {
      width: 65px;
      padding-top: 10px;
      padding-bottom: 10px;
      .song {
        color: #ccc;
        margin-left: 28px;
      }
    }
    .you {
        width:168px;
      /* flex: 1; */
      border-left: 1px solid rgb(183, 183, 187);
      font-size: 13px;
      line-height: 28px;
      .item {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 100%;
        cursor: pointer;
        color: #000;
        text-indent: 8px;
      }
    }
  }
`;
export const SearchHeader = styled.div`
  height: 35px;
  line-height: 35px;
  .tag {
    padding: 5px 10px;
    color: rgb(204, 204, 204);
    font-size: 12px;
  }
`;

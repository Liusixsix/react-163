import styled from "styled-components";

export const MvWrap = styled.div`
  display: flex;
  border-style: solid;
  border-color: rgb(211, 211, 211);
  border-image: initial;
  border-width: 0px 1px;
  border-top-width: 0px;
  border-right-width: 1px;
  border-bottom-width: 0px;
  border-left-width: 1px;

  .left {
    padding: 30px;
    width: 729px;
  }
  .right {
    flex: 1;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    border-image: initial;
    border-width: 0px 1px;
    border-top-width: 0px;
    border-right-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 1px;
    padding: 20px 40px 40px 30px;
    font-size: 12px;
    .title {
      border-bottom: 1px solid #ccc;
      color: #333;
      height: 23px;
      margin-bottom: 20px;
      font-weight:600;
    }
    p{
        color: #999;
        line-height:18px;
    }
    .info{
        margin-top:10px;
        margin-bottom:25px;
    }
  }
`;

export const CommentWrap = styled.div`
  margin-top: 20px;
`;


export const Recommend = styled.div`
    .recommend-item{
        width: 200px;
        margin-bottom:15px;
        display:flex;
        font-size:12px;
        .detail{
            margin-left:10px;
            flex:1;
        }
        .item-timer,.item-author{
            color: #999;
        }
    }
`
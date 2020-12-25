import styled from "styled-components";

export const SongItemWrapper = styled.div`
  display: flex;
  &.ranking {
    height: 70px;
  }
  .song-item {
    height: 30px;
    display: flex;
    align-items: center;
  }
  .cover {
    margin-right: 20px;
  }
  .rank-count {
    padding-left: 25px;
    width: 78px;
    color: #999;
  }

  .font-active {
    font-size: 15px;
    cursor: pointer;
    margin-right: 8px;
  }
  .font-active:active {
    color: #d31111;
  }

  .song-info {
    width: 335px;
    height: 100%;
  }

  .timer {
    width: 91px;
    height: 100%;
    display: flex;
    align-items: center;
    .btn {
      width: 17px;
      height: 17px;
      margin-left: 8px;
      cursor: pointer;
      display:none;
      &.addto {
        position: relative;
        top: 2px;
        background-position: 0 -700px;
      }
    }
    &:hover{
      .time{
        display:none;
      }
      .btn{
        display:block;
      }
    }

  
    
  }
  .author{
      height: 100%;
    display: flex;
    align-items: center;
    }
`;

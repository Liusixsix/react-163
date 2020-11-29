import styled from "styled-components";

export const HotWrap = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 2px solid #C10D0C;
  padding-bottom:5px;
  margin-bottom:20px;
  .header-left {
    display: flex;
    align-items:center;
    .title {
      font-size: 18px;
    }
    
  }
  .header-right {
    font-size: 12px;
    color: #666;
  }
`;
export const ItemWrap = styled.ul`
  margin-left: 20px;
  display: flex;
  align-items: center;
  color: #666;
  font-size: 12px;
  li {
    span {
      margin: 0 10px;
    }
  }
`;


export const ListWrap = styled.ul`
  display:flex;
  justify-content:space-between;
  flex-wrap:wrap;
 margin-bottom:20px;
`
export const ListItem = styled.li`
  width:140px;
  margin-bottom:20px;
  .hot-item{
    height:140px;
    /* border:1px solid red; */
    position: relative;
    
    img{
      width:100%;
      height:100%;
    }
    .bottom{
      position:absolute;
      bottom:0;
      width:100%;
      height: 27px;
      color: #ccc;
      background:rgba(0,0,0,.5);
      display:flex;
      justify-content:space-between;
      align-items:center;
      font-size:12px;
      padding:0 10px;
    }
  }

  .title{
    font-size:13px;
    margin-top:5px;
    /* padding:10px 0; */
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
`
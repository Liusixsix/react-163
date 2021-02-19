import styled from 'styled-components'


export const CateWrap = styled.div`
    display:flex;
    flex-wrap:wrap;


` 


export const CateItem = styled.div`
    padding:5px 10px;
    margin-left: 25px;
    margin-bottom: 25px;
    text-align:center;
    border:2px solid transparent;
    box-sizing:border-box;
    cursor: pointer;
    .icon{
        width: 48px;
        height: 48px;       
        background-image:url(${props=>props.bg});
        background-position: 0 0;
    }
   .name{
        color: #888;
        font-size:12px;
   }
   &.action{
      .icon{
        background-position: -48px 0;
      }
     .name{
        color: #d35757;
     }
     border:2px solid #d35757;
     border-radius:4px;
   }
   
`
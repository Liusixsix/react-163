import styled from 'styled-components'

export const RankingWrap = styled.div`

    .center{
        display:flex;
        border-style: solid;
        border-color: rgb(211, 211, 211);
        border-image: initial;
        border-width: 0px 1px;
        border-top-width: 0px;
        border-right-width: 1px;
        border-bottom-width: 0px;
        border-left-width: 1px;
    }
`

export const RankingLeft = styled.div`
    width: 240px;

`
 
export const RankingRight = styled.div`
    flex:1;
`

export const RankListWrapper = styled.div`
    /* padding-left:20px; */
    font-size:12px;
    margin-top:30px;
    .header{
        margin-left:20px;
    }
    li .item{ 
        display:flex;
        padding:10px 20px;
        margin-top:5px;
        text-decoration:none;
        &:hover{
            background-color: rgb(244, 242, 242)
        }
        &.active{
            background-color: rgb(230, 230, 230)
        }
        .info{
            margin-left:10px;
            /* padding:2px 0; */
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            .name{
                color: rgb(0, 0, 0);
            }
            .tag{
                color: rgb(153, 153, 153);
            }
        }
    }

`
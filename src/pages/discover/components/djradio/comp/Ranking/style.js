import styled from 'styled-components'


export const RightRio = styled.div`
    font-size:12px;
    a{
        margin-left:10px;
        &.action{
            color:#c20c0c;
        }
    }

`

export const RankingListWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
`

export const RankingItemWrap = styled.div`
    display:flex;
    width:50%;
    padding: 20px 0;
    border-bottom: 1px solid #e7e7e7;
    .pic{
        width: 120px;
         height: 120px;
         margin-right:15px;
         img{
             width:100%;
             height:100%;
         }
    }
    .cnt{
        .title{
            line-height: 64px;
            font-size:18px;
           a{
            color:#000;
           }
        }
        .name{
            color:#333;
        }
        .count{
            color: #999;
            font-size:12px;
            line-height:20px;
        }
    }

`

export const PageWrap = styled.div`
    text-align:center;
    margin-top:20px;
`
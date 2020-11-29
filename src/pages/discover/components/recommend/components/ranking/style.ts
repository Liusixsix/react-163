import styled from 'styled-components'
import bg from '@/assets/image/listbg.png'
export const RankWrap = styled.div`
    

`

export  const RankListWrap = styled.div`
    display:flex;
    /* border:1px solid red; */
    height: 472px;
    background:url(${bg}) no-repeat;
`

export const TopRankingWrapper = styled.div`
    width:33.333%;
    /* border:1px solid red; */
    .top{
        height:100px;
        padding:20px 0px 0px 20px;
        display:flex;
        box-sizing: content-box;
        .cver{
            width: 80px;
             height: 80px;
             img{
                 width:100%;
                 height:100%;
             }
        }
        .tit{
            margin:6px 10px 0px 10px;
            h3{
                font-size:14px;
            }
            .btn{
                margin-top:10px;
                .play{
                    background-position: -267px -205px;
                    display:inline-block;
                margin-right: 8px;
                width:22px;
                height:22px;
                cursor: pointer;
                }
                .Collection{
                    display:inline-block;
                    background-position: -300px -205px;
                width:22px;
                height:22px;
                cursor: pointer;
                }
            }
           
        }
    }

    .item{
        height: 32px;
        line-height:32px;
        display:flex;
        align-items:center;
        position: relative;
        padding-right:5px;
        .index{
            width: 35px;
            height: 32px;
            margin-left: 35px;
            text-align: center;
            color: #666;
            font-size: 16px;
            margin-right:10px;
            &.active{
                color: #c10d0c;
            }
        }
        .item-name{
            width: 170px;
            height: 32px;
            color:#000;
            font-size:12px;
        }
    }
    .bottom{
        line-height:32px;
        text-align:right;
    }
`
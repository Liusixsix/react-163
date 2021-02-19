import styled from 'styled-components'


export const PlayListWrapper = styled.div`
     background-color: rgb(255, 255, 255);
    border-style: solid;
    border-color: rgb(211, 211, 211);
    border-image: initial;
    border-width: 0px 1px;
    padding: 40px;
    display:flex;
`


export const PalyListLeft = styled.div`
    width:600px;

    .header{
        display:flex;

        .header-img-cover{
            margin-right:20px;
        }
    }

    .play-list{
        .title{
            display:flex;
            align-items:center;
            .index{
                width:74px;
            }
        }
    }

    .list-content{
        .item{
            font-size:13px;
            color: #333;
            height:30px;
            display:flex;
            align-items:center;
            .inx{
                width:74px;
            }
            .anticon-play-circle{
                margin-right:10px;
                font-size:20px;
            }
        }
    }

`
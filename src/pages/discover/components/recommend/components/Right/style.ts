import styled from 'styled-components'


export const RightWrapper = styled.div`


`

export const LoginWrapper = styled.div`
        height: 126px;
        padding-top: 0;
        background-position: 0 0;
        .note{
            width: 205px;
            margin: 0 auto;
            padding: 16px 0;
            line-height: 22px;
            color:#666;
            font-size:12px;
        }
        .login-btn{
            display: block;
            width: 100px;
            height: 31px;
            line-height: 31px;
            text-align: center;
            color: #fff;
            text-shadow: 0 1px 0 #8a060b;
            background-position: 0 -195px;
            font-size:12px;
            margin:0 auto;
            text-decoration:none;
            &::hover{
                color: #fff;
            }
        }
`

export const SettlementSingerWrapper = styled.div`
    margin-top:15px;
    padding:0 20px;
    .header{
        display:flex;
        justify-content:space-between;
        font-size:12px;
        padding-bottom:5px;
        border-bottom: 1px solid rgb(204, 204, 204);
         color: rgb(51, 51, 51);
    }
    .center{
        margin-top:6px;
        li{
            margin-top:14px;
            height: 62px;
            background: rgb(250, 250, 250);
            /* border:1px solid red; */
            &:hover{
                background: rgb(244, 244, 244);
            }
            .item{
                display:flex;
                text-decoration:none;
                .head img{
                    width: 62px;
                    height: 62px;
                }
                .ifo{
                    flex:1;
                    display:flex;
                    flex-direction:column;
                    justify-content:space-around;
                    font-size:12px;
                    margin-left:14px;
                    border-top: 1px solid rgb(233, 233, 233);
                 border-right: 1px solid rgb(233, 233, 233);
                 border-bottom: 1px solid rgb(233, 233, 233);
                }
            }
        } 
    }
    .apply-btn{
        margin-top:14px;
        color: rgb(51, 51, 51);

        height: 31px;
        line-height: 31px;
        overflow: hidden;
        vertical-align: top;
        text-align: center;
        cursor: pointer;
        border-radius: 4px;
        border:1px solid #666;
    }
`


export const AnchorWrapper = styled.div`
    margin-top:20px;
    padding:0 20px;
    .header{
        font-size:11px;
        padding-bottom:5px;
        border-bottom: 1px solid rgb(204, 204, 204);
         color: rgb(51, 51, 51);
    }
    li{
        margin-top:14px;
        display: flex;
        img{
            width: 40px;
            height: 40px;
            box-shadow: 0 0 1px #333333 inset;
        }
        .info{
            margin-left:14px;
            font-size:12px;
            a{
                color: #000;
            }
        }
    }
`
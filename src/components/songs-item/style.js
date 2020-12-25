import styled from 'styled-components'


export const  SongsItemWrapper = styled.div`
    margin:20px 0;
    width:150px;
    .cover-wrapper{
        width:140px;
        height:140px;
        position:relative;
        img{
            width:100%;
        }

        .bottom{
            position:absolute;
            left:0;
            bottom:0;
            width:100%;
            color: #ccc;
            display:flex;
            align-items: center;
            height:27px;
            font-size: 12px;
            padding: 0 10px;
            background-position: 0 -537px;
            .icon-header {
                display: inline-block;
                width: 14px;
                height: 11px;
                margin-right: 5px;
                vertical-align: middle;
                background: url(${require('../../assets/image/iconall.png')}) no-repeat 0 9999px;
                background-position: 0 -24px;
            }

            .play{
                display: inline-block;
                width: 16px;
                height: 17px;
                background-position: 0px 0px;
            }
        }
    }

    .cover-title{
        font-size: 14px;
        color: rgb(0, 0, 0);
        margin-top: 5px;
    }
    .cover-source{
        color: rgb(102, 102, 102);
        font-size:12px;
    }

`
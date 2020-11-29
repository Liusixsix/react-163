import styled from 'styled-components'

export const FooterWrap = styled.div`
    width:100%;
    position: relative;
    height: 172px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
    .footer-inner{
        padding:20px 0 40px 0px;
        color: #999;
        font-size:12px;
        display:flex;
        .link{
            margin-bottom:10px;
            a{
            margin:0 5px;
            color: #999;
        }
        }
        
    }
`
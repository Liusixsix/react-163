import styled from 'styled-components'

export const ListWrap = styled.div`
    display:flex;
    background-color: rgb(255, 255, 255);
    width:980px;
    margin:0 auto;
`

export const WrapLeft = styled.div`
    padding: 20px;
    width: 729px;
    border-style: solid none solid solid;
    border-top-color: rgb(211, 211, 211);
    border-bottom-color: rgb(211, 211, 211);
    border-left-color: rgb(211, 211, 211);
    border-image: initial;
    border-top-width: 0px;
    border-bottom-width: 0px;
    border-left-width: 1px;
    border-right-width: initial;
    border-right-color: initial;
`
export const WrapRight = styled.div`
    width: 250px;
    border-style: solid;
    border-color: rgb(211, 211, 211);
    border-image: initial;
    border-width: 0px 1px;
`
import React from 'react'
import styled from 'styled-components'




interface Iprops{
    title:string
    right?:React.ReactNode
}

const HeaderWrap = styled.div`
    height: 40px;
    border-bottom: 2px solid #c20c0c;
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:20px;
    margin-top:30px;
`

const MyHeader:React.FC<Iprops> = (props)=>{

    const { title,right } = props

    return (
        <HeaderWrap className='header-wrap'>
            <h2>{title}</h2>
            {right && right}
        </HeaderWrap>
    )
}

export default MyHeader
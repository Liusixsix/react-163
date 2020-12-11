import React from 'react'
import {Header} from './style'
import {Link} from 'react-router-dom'

interface Iprops{
    title:string
}

const HotHeader:React.FC<Iprops> = (props)=>{
    return (
        <Header>
        <div className="header-left">
            <div className='prefix'></div>
             <h2 className="title">{props.title}</h2>
             {props.children}
        </div>
        <div className='header-right'>
            <Link to='/'>更多</Link>
            <span className='sprite_02 more'></span>
        </div>
      </Header>
    )

}

export default HotHeader
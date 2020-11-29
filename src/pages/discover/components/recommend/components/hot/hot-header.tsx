import React from 'react'
import {Header} from './style'


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
        <div className='header-right'>更多</div>
      </Header>
    )

}

export default HotHeader
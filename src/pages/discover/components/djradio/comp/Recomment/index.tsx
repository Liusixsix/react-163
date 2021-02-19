import React from 'react'
import { useSelector } from 'react-redux'
import Myheader from '../my-header'
import styled from 'styled-components'


const RecommentList = styled.div`
    display:flex;
    justify-content:space-between;
    flex-wrap:wrap;
    &::after{
        width:60%;
        content:'';
        height: 0;
    }

`

const Item = styled.div`
    font-size:13px;
    width: 150px;
    cursor: pointer;
    .pic{
        width: 150px;
        height: 150px;
        margin-bottom:10px;
    }
    .name{
        color: #333;
    }
    .rcmdtext{
        color: #999;
        line-height:20px;
    }
    
`


const Recomment:React.FC = ()=>{

    const {recommnet}= useSelector((state:any)=>({
        recommnet:state.getIn(['djradio','recommnet']),
    })) 

    return (
        <div>
             <Myheader title='优秀新电台'></Myheader>
             <RecommentList>
                 {
                    recommnet && recommnet.slice(0,5).map(ite=>{
                       return  (<Item key={ite.id}>
                           <img className='pic' src={ite.picUrl+'?param=200y200'} alt=""/>
                           <a className='name'>{ite.name}</a>
                           <p className='rcmdtext'>{ite.rcmdtext}</p>
                        </Item>)
                     })
                 }
             </RecommentList>
        </div>
    )
}

export default Recomment
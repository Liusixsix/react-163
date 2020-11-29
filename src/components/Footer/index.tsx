import React from 'react'
import { Link } from 'react-router-dom'
import {FooterWrap} from './style'
export default function Footer() {
    return (
        <FooterWrap>
            <div className='w980 footer-inner'>
                <div className="left">
                    <div className='link'>
                        <Link to='/'>服务条款</Link>
                        <span className='line'>丨</span>
                        <Link to='/'>隐私政策</Link>
                        <span className='line'>丨</span>
                        <Link to='/'>儿童隐私政策</Link>
                        <span className='line'>丨</span>
                        <Link to='/'>版权投诉指引</Link>
                        <span className='line'>丨</span>
                        <Link to='/'>意见反馈</Link>
                        <span className='line'>丨</span>
                    </div>
                    <p>网易公司版权所有©1997-2020杭州乐读科技有限公司运营：浙网文[2018]3506-263号</p>
                        <p>违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com</p>
                <p>粤B2-20090191-18工业和信息化部备案管理系统网站  浙公网安备 33010902002564号</p>
            </div>
                <div className="right">

                </div>
            </div>
        </FooterWrap>
    )
}

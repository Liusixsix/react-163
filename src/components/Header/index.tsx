import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { headerLinks, linkItem } from "@/common/local-data";
import Search from "../Search";
import { getSearchSongData } from "@/service/header";
import { debounce } from "@/utils";
import "./index.scss";

export default function Header(props: any) {
  const history = useHistory();
  const inpEl = useRef<HTMLInputElement>(null);
  const [inpIsFocus, setInpIsFocus] = useState(false);
  const [searchRes, setSearchRes] = useState([]);
  const itemLink = (e: any, { link }: linkItem) => {
    e.preventDefault();
    if (link.startsWith("http")) {
      window.open(link);
      return;
    }
    history.push(link);
  };

  // useEffect(()=>{
  //   inpEl.current?.focus() 
  //  return ()=>{
  //   inpEl.current?.blur() 
  //   }
  // })
  
  const getSearchData = (keywords: any) => {
    getSearchSongData(keywords).then((res: any) => {
      res.result && res.result.songs && setSearchRes(res.result.songs);
    });
  };

  const inpChange = debounce((e: any) => {
    const val = e.target?.value.trim();
    val && getSearchData(val)
  },400)

  return (
    <div>
      <div className="HeaderCategory">
        <div className="content w1100">
          <div className="left">
            <h1>
              <a href="/" className="logo bglogo"></a>
            </h1>
            <ul className="header-group">
              {headerLinks.map((item: linkItem, index: number) => {
                return (
                  <NavLink
                    className="header-item"
                    onClick={(e) => itemLink(e, item)}
                    key={item.title}
                    to={item.link}
                    activeClassName="menu-active"
                  >
                    {item.title}
                    <i className="icon"></i>
                  </NavLink>
                );
              })}
            </ul>
          </div>

          <div className="right">
            <div className="search-wrapper">
              <input
                ref={inpEl}
                type="text"
                onChange={inpChange}
                className="search"
                placeholder="音乐/歌手"
                onFocus={() => setInpIsFocus(true)}
                onBlur={() => setInpIsFocus(false)}
              />
              <i className="icon-iconfontzhizuobiaozhun22  iconfont search-icon"></i>
              { inpIsFocus && inpEl.current?.value && <Search data={searchRes}></Search>}
            </div>
            <div className="manufacture">制造者中心</div>
            <span className="login">登录</span>
          </div>
        </div>
      </div>
      <div className="red-line"></div>
      {/* <Menu></Menu> */}
      {/* {renderRoutes(route.routes)} */}
    </div>
  );
}

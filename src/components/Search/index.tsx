import React, { forwardRef } from "react";
import { SearchWrap, SearchHeader } from "./style";

interface Iprops {
  data: any;
}

const Search = (props:Iprops) => {
    const {data}= props
  return (
    <SearchWrap>
      <SearchHeader>
        <span className="tag">搜"歌曲"相关用户</span>
      </SearchHeader>
      <div className="content">
        <div className="zuo">
          <span className="song">单曲</span>
        </div>
        <div className="you">
            {
                data.map((item:any,index:number)=>{
                    return <div className='item'  key={item.id}> 
                          {item.name}-{item.artists[0].name}
                    </div>
                })
            }
            
            
        </div>
      </div>
    </SearchWrap>
  );
};

export default Search;

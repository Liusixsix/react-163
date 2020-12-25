import React,{ RefObject, useEffect } from "react";

export function useClick(isShow:boolean,ref:RefObject<HTMLDivElement>,handle){
    useEffect(()=>{
        const listen = (e:MouseEvent)=>{
            console.log(isShow)
            if(!isShow || !ref.current || ref.current.contains(e.target as HTMLElement))return
            handle()
        }

        isShow && document.addEventListener('click',listen)
        return ()=>{
            document.removeEventListener('click',listen)
        }

    },[isShow,ref,handle])
}
import { getMvUrl } from '@/service/mv'
import React, { useEffect,useState } from 'react'

export function useGetMvUrl (id){

    const  [url, setUrl] = useState<string>(null)

    const getUrl = async(id)=>{
      const {data} =  await getMvUrl(id)
      setUrl(data.url)
    }
    useEffect(()=>{
       getUrl(id)
    },[id])
    
    return url
}
import { getAddSongDeatilAction } from "@/pages/player/store/action";
import { useDispatch } from "react-redux";
import {message} from 'antd'

export function useAddPlaylist(playList){
    const dispatch = useDispatch()
    return (e,id)=>{
        e.preventDefault && e.preventDefault()
        dispatch(getAddSongDeatilAction(id))
        const index =   playList.findIndex(song=>song.id===id)
        switch(index){
            case -1:
                message.success({content:'添加成功'})
                break
            default:
                message.success({ content: '不能添加重复的歌曲' })
        }
    }
}
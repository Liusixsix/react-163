import { actionTypes } from "./index";
import { ThunkDispatch } from "redux-thunk";
import {
  getTopBanners,
  getHotList,
  getNewest,
  getPlayList,
} from "@/service/recommend";

export const changeTopBannerAction = (res: any) => ({
  type: actionTypes.CHANGE_TOP_BANNER,
  data: res.banners,
});

export const changeHotList = (res: any) => ({
  type: actionTypes.CHANGE_HOT_LIST,
  data: res.result,
});

export const changeNewEst = (res: any) => ({
  type: actionTypes.CHANGE_NEWEST,
  data: res.albums,
});

export const changeUpRanking = (res: any) => ({
  type: actionTypes.CHANGE_UP_RANKING,
  data: res.playlist,
});

export const changeNewRanking = (res: any) => ({
  type: actionTypes.CHANGE_NEW_RANKING,
  data: res.playlist,
});

export const changeOriginRanking = (res: any) => ({
  type: actionTypes.CHANGE_ORIGIN_RANKING,
  data: res.playlist,
});

// 异步

export const getTopBannersAction = () => {
  return (dispatch: ThunkDispatch<any, any, any>) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

export const getHotListAction = () => {
  return (dispatch: any) => {
    getHotList().then((res) => {
      dispatch(changeHotList(res));
    });
  };
};

export const getNewEstAction = () => {
  return (dispatch: any) => {
    getNewest().then((res) => {
      dispatch(changeNewEst(res));
    });
  };
};

export const getTopListAction = (id: number) => {
  return (dispatch: any) => {
    getPlayList(id).then((res) => {
      switch (id) {
        case 19723756:
          dispatch(changeUpRanking(res));
          break;
        case 3779629:
          dispatch(changeNewRanking(res));
          break;
        case 2884035:
          dispatch(changeOriginRanking(res));
          break;
        default:
      }
    });
  };
};

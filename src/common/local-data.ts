export interface linkItem{
    title:string
    link :string
}
export const headerLinks:linkItem[] = [
  {
    title: "发现音乐",
    link: "/discover",
  },
  {
    title: "我的音乐",
    link: "/mine",
  },
  {
    title: "朋友",
    link: "/friend",
  },
  {
    title: "商城",
    link: "https://music.163.com/store/product",
  },
  {
    title: "音乐人",
    link: "https://music.163.com/nmusician/web/index#/",
  },
  {
    title: "下载客户端",
    link: "https://music.163.com/#/download",
  },
];



// discover中的数据
export const dicoverMenu:linkItem[] = [
    {
      title: '推荐',
      link: '/discover/recommend',
    },
    {
      title: '排行榜',
      link: '/discover/ranking',
    },
    {
      title: '歌单',
      link: '/discover/songs',
    },
    {
      title: '主播电台',
      link: '/discover/djradio',
    },
    {
      title: '歌手',
      link: '/discover/artist',
    },
    {
      title: '新碟上架',
      link: '/discover/album',
    },
  ]
  
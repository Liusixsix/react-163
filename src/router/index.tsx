import React,{lazy,Suspense} from 'react'
import { Redirect } from 'react-router-dom'

const SuspenseComponent = (Component:any) => (props:any) => {
    return (
      <Suspense fallback={null}>
        <Component {...props}></Component>
      </Suspense>
    );
  };

const JMDiscover  = lazy(()=>import("../pages/discover"))
const Recommend = lazy(()=>import("../pages/discover/components/recommend"))
const Ranking = lazy(()=>import('../pages/discover/components/ranking'))
const Song = lazy(()=>import('../pages/player/index'))
const Mine = lazy(()=>import('../pages/mine/index'))
const Songs = lazy(()=>import('../pages/discover/components/songs'))
const router = [
    { path: '/', exact: true, render: () => <Redirect to="/discover" /> },
    {
        path: '/discover',
        component: SuspenseComponent(JMDiscover),
        routes:[
          {
            path: '/discover',
            exact: true,
            render: () => <Redirect to="/discover/recommend" />,
          },
          {
            path: "/discover/recommend",
            component: Recommend,
          },
          {
            path: "/discover/Ranking",
            component: Ranking,
          },
          {
            path: "/discover/song",
            component: Song,
          },
          {
            path:'/discover/songs',
            component:Songs
          }
        ]
    },
    {
      path:'/mine',
      component:SuspenseComponent(Mine)
    }
   
]



export default router
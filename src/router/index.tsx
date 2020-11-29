import React,{lazy,Suspense} from 'react'
import { Redirect } from 'react-router-dom'

const SuspenseComponent = (Component:any) => (props:any) => {
    return (
      <Suspense fallback={null}>
        <Component {...props}></Component>
      </Suspense>
    );
  };
  const main = (props:any)=>{
    console.log(props)
    return (
      <div>main</div>
    )
  }
const JMDiscover  = lazy(()=>import("../pages/discover"))
const Recommend = lazy(()=>import("../pages/discover/components/recommend"))
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
            routes:[
              {path:'/discover/recommend', exact: true, render:()=><div>默认</div>},
              {path:'/discover/recommend/about',render:()=><div>关于</div>},
              {path:'/discover/recommend/abc',render:()=><div>abc</div>}
            ]
          }
        ]
    },
    {
      path: "/mine",
      component: main
    }
]



export default router
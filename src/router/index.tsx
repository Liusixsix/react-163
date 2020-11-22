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
          }
        ]
    },
    {
      path: "/mine",
      component: ()=> <div>2333</div>,
    }
]

export default router
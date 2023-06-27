import {lazy} from "react";

const lazyLoad = function (moduleName:string) {
    const Module = lazy(()=>import(`/src/views/${moduleName}`))
    return (
        <Module></Module>
        )
};

interface Router {
    name?:string,
    path:string,
    element:any,
    children?: Array<Router>
}

const routes: Array<Router> = [
    {
        path:'/login',
        element:lazyLoad('login')
    },
    {
        path:'/counter',
        element:lazyLoad('counter')
    }
]

export default routes
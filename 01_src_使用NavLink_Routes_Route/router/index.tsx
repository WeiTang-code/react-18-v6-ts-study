import {lazy} from "react";

const lazyLoad = function (moduleName:string) {
    const Moudle = lazy(()=>import(`/src/views/${moduleName}`))
    return <Moudle></Moudle>
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
    }
]

export default routes
import React, {Suspense} from "react";
import {createRoot} from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom";
import Loading from "views/Loading";
// 引入store并使用Provider传入react中
import store from "@/store";
import {Provider} from "react-redux";


const root = createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Suspense fallback={<Loading></Loading>}>
                <App></App>
            </Suspense>
        </BrowserRouter>
    </Provider>
)
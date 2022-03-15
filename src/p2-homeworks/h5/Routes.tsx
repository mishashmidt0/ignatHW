import React from 'react'
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/home";
import {PreMiddle} from "./pages/PreMiddle";
import PreSenior from "./pages/PreSenior";


export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    PRE_MIDDLE: '/pre-middle',
    PRE_SENIOR: '/pre-senior',


}

export function Pages() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Home/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>

                <Route path={PATH.PRE_MIDDLE} element={<PreMiddle/>}/>

                <Route path={PATH.PRE_SENIOR} element={<PreSenior/>}/>

                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}



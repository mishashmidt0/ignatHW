import React from 'react'
import s from './App.module.css'
import HW5 from '../../../p2-homeworks/h5/HW5';
import {Provider} from "react-redux";
import store from "../../../p2-homeworks/h10/bll/store";


function App() {
    return (
        <Provider store={store}>
            <div className={s.App}>
                <HW5/>
            </div>
        </Provider>
    );
}

export default App

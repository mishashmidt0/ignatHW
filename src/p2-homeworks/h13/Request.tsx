import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../h10/bll/store";
import {changeValue, sendData} from "./bll/requestReducer";

export const Request = () => {
    const dispatch = useDispatch<any>()
    const isActive = useSelector<storeType, boolean>(state => state.req.value)
    const title = useSelector<storeType, string>(state => state.req.title)

    const changeActiveBox = () => {
        dispatch(changeValue(!isActive))
    }

    const sending = () => {
        dispatch(sendData(isActive))
    }


    return (
        <div>
            <button onClick={sending}>Send</button>
            <input type="checkbox" checked={isActive} onClick={changeActiveBox} readOnly/>
            <h3>Response: </h3>
            <p>{title}</p>
        </div>
    );
};


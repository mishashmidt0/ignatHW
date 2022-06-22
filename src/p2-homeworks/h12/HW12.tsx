import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";
import {useDispatch, useSelector} from "react-redux";
import {storeType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";


function HW12() {
    const theme = useSelector<storeType, string>(state => state.theme.activeTheme)
    const allTheme = useSelector<storeType, string[]>(state => state.theme.allTheme)
    const dispatch = useDispatch()


    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <br/>

            <SuperSelect options={allTheme} onChangeOption={onChangeCallback}/>

            <SuperRadio onChangeOption={() => {
            }}/>


            <hr/>
        </div>
    );
}

export default HW12;

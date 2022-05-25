import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {loadingAC, TypeForLoadingReducer} from "./bll/loadingReducer";

function HW10() {
    const dispatch = useDispatch()
    const loading = useSelector((store: AppStoreType) => store.loading.isLoading)

    const setLoading = () => {
        dispatch(loadingAC(TypeForLoadingReducer.LOAD))
        setTimeout(() => {
            dispatch(loadingAC(TypeForLoadingReducer.OK))
        }, 1000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

        </div>
    )
}

export default HW10

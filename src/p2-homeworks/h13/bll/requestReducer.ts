import {Dispatch} from "redux";
import {reqApi} from "../requestApi";

const initState: themeType = {
    value: false,
    title: "",
};

export const requestReducer = (state: themeType = initState, action: actionType): themeType => {
    switch (action.type) {
        case "changeValue": {
            return {...state, value: action.value};
        }
        case "changeTitle": {
            return {...state, title: action.value};
        }
        default:
            return state;
    }
};

//action
export const changeValue = (value: boolean) => ({
    type: "changeValue",
    value
} as const);
export const changeTitle = (value: any) => ({
    type: "changeTitle",
    value
} as const);

// thunk
export const sendData = (value: boolean) => {
    return async (dispatch: Dispatch<any>) => {
        try {
            const res: any = await reqApi.send(value)
            dispatch(changeTitle(res.data.errorText))
        } catch (err: any) {
            console.log({...err});
            dispatch(changeTitle(err.response ? err.response.data.errorText : err.message));
        }
    }
}


//type
export type  themeType = {
    value: boolean,
    title: any,
};
type actionType = ReturnType<typeof changeValue> | ReturnType<typeof changeTitle>
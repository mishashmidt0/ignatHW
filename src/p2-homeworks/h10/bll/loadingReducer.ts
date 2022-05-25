const initState = {
    isLoading: false
}

export enum TypeForLoadingReducer {
    LOAD = 'LOAD',
    OK = 'OK'
}

interface LoadingReducerProps {
    isLoading: boolean
}

interface actionProps {
    type: string;
}

export const loadingReducer = (state: LoadingReducerProps = initState, action: actionProps): LoadingReducerProps => { // fix any
    switch (action.type) {
        case TypeForLoadingReducer.LOAD: {
            return {isLoading: true}
        }
        case TypeForLoadingReducer.OK: {
            return {isLoading: false}
        }
        default:
            return state
    }
}

export const loadingAC = (type: TypeForLoadingReducer): actionProps => {
    return {
        type
    }
}

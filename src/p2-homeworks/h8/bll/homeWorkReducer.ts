type peapleType = {
    _id: number
    name: string
    age: number
}
export type stateType = peapleType[]
type sortType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type checkType = {
    type: 'check'
    payload: number
}

type actionType = sortType | checkType


export const homeWorkReducer = (state: stateType, action: actionType): stateType => { // need to fix any
    switch (action.type) {
        case 'sort':
            switch (action.payload) {
                case 'up':
                    return [...state.sort((a, b) => a.name > b.name ? 1 : -1)]
                case 'down':
                    return [...state.sort((a, b) => a.name < b.name ? 1 : -1)]
            }
        case'check': {
            return [...state.filter((e) => action.payload < e.age)]
        }
        default:
            return state
    }
}

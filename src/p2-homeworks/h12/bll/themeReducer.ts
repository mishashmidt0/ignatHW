const initState: themeType = {
    dark: ["dark", "dark-text"],
    red: ["red", "red-text"],
    some: ["some", "dark-text"],
    allTheme: ['dark', 'red', 'some'],
    activeTheme: "dark"
};

export const themeReducer = (state: themeType = initState, action: actionType): themeType => {
    switch (action.type) {
        case "changeTheme": {
            return {...state, activeTheme: action.value};
        }
        default:
            return state;
    }
};

//action
export const changeThemeC = (value: string) => ({
    type: "changeTheme",
    value
} as const);


//type
export type  themeType = {
    dark: string[],
    red: string[],
    some: string[],
    allTheme: string[],
    activeTheme: string
};
type actionType = ReturnType<typeof changeThemeC>

export type ValueType = 'light' | 'blue' | 'dark'
export type ThemeType = {
    themeId: number
    value: ValueType
}

const initState: ThemeType = {
    themeId: 1,
    value: 'light'
}

export const themeReducer = (state: ThemeType = initState, action: ThemeActionType): ThemeType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}

        default:
            return state
    }
}

// ActionCreate
export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id }) as const // fix any



type ThemeActionType = ReturnType<typeof changeThemeId>


type LoadingStateType = typeof initState;

const initState = {
    isLoading: false,
}

export const loadingReducer = (state: LoadingStateType  = initState, action: ActionType): LoadingStateType  => { // fix any
    switch (action.type) {
        case 'CHANGE_LOADING': {
            return {...state, isLoading: action.isLoading};
        }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
 }


export const loadingAC = (isLoading: boolean): LoadingActionType => ({
    type: 'CHANGE_LOADING',
    isLoading,
}) as const



type ActionType = LoadingActionType

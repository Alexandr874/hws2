import {initialPeople, UserType} from '../HW8'

const initialState: UserType[] =  initialPeople

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state= initialState, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            return   [...state].sort((a, b) =>
                action.payload === 'up'
                    ? a.name.localeCompare(b.name) // по возрастанию
                    : b.name.localeCompare(a.name) // по убыванию
            );
        }
        case 'check': {
            return [...state].filter(el => el.age > action.payload)
                .reverse()
        }
        default:
            return state
    }
}

import {ActionType, UsersType} from '../HW8';

export const homeWorkReducer = (state: UsersType, action: ActionType): UsersType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const result = [...state].sort((a,b)=>{
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0;
            })
            return action.payload === 'up' ? result : result.reverse();
        }
        case 'check': {

            return state.filter(u=>u.age>18)
        }
        default: return state
    }
}
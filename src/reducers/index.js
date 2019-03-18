import { HOME, CHANGE_SECTION, NEW_CURRENT_PAGE } from '../constants'

const INITIAL_STATE = {
    newCurrentPage: 1,
    section: HOME
}

export function procyonidaeReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_SECTION:
            return {
                section: action.section
            }
        case NEW_CURRENT_PAGE:
            return {
                newCurrentPage: action.newCurrentPage
            }
        default: 
            return state;
    }
}
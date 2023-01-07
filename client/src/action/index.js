export const ADD_COUNTER = 'ADD_COUNTER'
export const MIN_COUNTER = 'MIN_COUNTER'
export const RESET_COUNTER = 'RESET_COUNTER'

export function addCounter(counter) {
    return { 
        type: ADD_COUNTER, 
        counter
    }
}

export function minCounter(counter) {
    return { 
        type: MIN_COUNTER, 
        counter
    }
}

export function resetCounter(counter) {
    return { 
        type: RESET_COUNTER, 
        counter
    }
}
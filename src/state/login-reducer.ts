const initialState = {

}
type InitialStateType = typeof initialState

export const loginReducer = (state: InitialStateType = initialState, action: LoginReducerActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export type LoginReducerActionsType = {
    type: ""
}
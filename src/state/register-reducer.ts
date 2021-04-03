const initialState = {

}
type InitialStateType = typeof initialState

export const registerReducer = (state: InitialStateType = initialState, action: RegisterReducerActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export type RegisterReducerActionsType = {
    type: ""
}
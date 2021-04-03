const initialState = {

}
type InitialStateType = typeof initialState

export const recoverReducer = (state: InitialStateType = initialState, action: RecoverReducerActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export type RecoverReducerActionsType = {
    type: ""
}
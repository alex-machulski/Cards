const initialState = {

}
type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export type AppReducerActionsType = {
    type: ""
}
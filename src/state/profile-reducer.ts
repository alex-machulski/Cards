const initialState = {

}
type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ProfileReducerActionsType): InitialStateType => {
    switch (action.type) {
        default:
            return state
    }
}

export type ProfileReducerActionsType = {
    type: ""
}
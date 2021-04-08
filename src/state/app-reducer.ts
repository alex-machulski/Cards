
const SET_IS_APP_LOADING = "SET_IS_APP_LOADING";

const initialState = {
    isAppLoading: false
}
type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppReducerActionsType): InitialStateType => {
    switch (action.type) {
        case SET_IS_APP_LOADING:
            return {...state, isAppLoading: action.isAppLoading}
        default:
            return state
    }
}

export const setIsAppLoadingAC = (isAppLoading: boolean) => ({type: SET_IS_APP_LOADING, isAppLoading} as const);
type SetIsAppLoadingActionType = ReturnType<typeof setIsAppLoadingAC>

export type AppReducerActionsType = SetIsAppLoadingActionType
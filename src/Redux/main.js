let defaultState={
    album:" "
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="GET_ALBUMS"){
        return{
            ...state,
            color:action.color
        }
    } else{
        return{
            ...state
        }
    }
}

export default mainReducer;
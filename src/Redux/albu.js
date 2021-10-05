import axios from "axios";

export function album(){
    return(dispatch)=>{
        return axios.get("http://www.colr.org/json/color/random").then((response)=>{
            dispatch(changeAlbum("#"+response.data.new_album));
        })
    }
}

export function changeAlbum(album){
    return{
        type: "GET_ALBUMS",
        payload: 
    }
}
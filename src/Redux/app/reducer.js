import * as types from "./actionTypes"

const initialState={
    books:[],
    isLoading:false,
    isError:false
}

const reducer=(oldState=initialState,action)=>{
    const {type,payload}=action
    switch (type){
        case types.GET_BOOKS_REQUEST:{
            return{
                ...oldState,
                isLoading:true
            }
        }
        case types.GET_BOOKS_SUCCESS:{
            return{
                ...oldState,
                isLoading:false,
                books:payload,
                isError:false
            }
        }
        case types.GET_BOOKS_FAILURE:{
            return{
                ...oldState,
                isLoading:false,
                books:[],
                isError:true
            }
        }
        default:{
            return oldState
        }
    }
}

export {reducer}
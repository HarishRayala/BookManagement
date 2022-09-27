import * as types from "./actionTypes"
import axios from "axios"

// const getBookRequest=()=>{
//     return{
//         type:types.GET_BOOKS_REQUEST
//     }
// }

// either top or bottom method

// currying
const getBooks=(params)=>(dispatch)=>{
    dispatch({type:types.GET_BOOKS_REQUEST})
    return axios.get("http://localhost:8080/books",params).then((res)=>{
        dispatch({type:types.GET_BOOKS_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.GET_BOOKS_FAILURE,payload:err.message})
    })
}

const updateBook=(id,payload)=>(dispatch)=>{
    dispatch({type:types.PATCH_BOOK_REQUEST})
    return axios.patch(`http://localhost:8080/books/${id}`,payload).then((res)=>{
        dispatch({type:types.PATCH_BOOK_SUCCESS,payload:res.data})
    }).catch((err)=>{
        dispatch({type:types.PATCH_BOOK_FAILURE,payload:err.message})
    })
}

export {getBooks,updateBook}
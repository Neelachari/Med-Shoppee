import axios from "axios"
import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, ITEM_REMOVE_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"

export const postProduct=(newProduct)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})

     axios.post(`https://deployeement-server.onrender.com/products`, newProduct)
    .then((res)=>{
        dispatch({type:POST_PRODUCT_SUCCESS, payload:res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })


}


export const getProducts = (obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://deployeement-server.onrender.com/products?_limit=9`,obj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS, payload :res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

export const allProducts = (obj)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://deployeement-server.onrender.com/products`,obj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS, payload :res.data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}


export const addToCart=(cartData)=>(dispatch)=>{
    console.log(cartData)
    dispatch({type:ADD_PRODUCT_SUCCESS, payload:cartData})
    
}

export const RemoveItem=(id)=>(dispatch)=>{
    console.log(id)
    dispatch({type:ITEM_REMOVE_SUCCESS, payload:id})
}
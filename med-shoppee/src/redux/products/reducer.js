import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, ITEM_REMOVE_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionTypes"


const initialState={
    products:[],
    Cart:[],
    isLoading:false,
    isError:false
}


export const reducer = (state = initialState,{type,payload}) => {
  switch(type){
    case PRODUCT_REQUEST:{
      return {...state, isLoading:true}
    }
    case PRODUCT_FAILURE:{
      return {...state, isError:true, isLoading:false}
    }
    case POST_PRODUCT_SUCCESS:{
      return {...state, isError:false, isLoading:false,  products:[...state.products, payload]}
    }
    case ADD_PRODUCT_SUCCESS:{
      return {...state, Cart:[...state.Cart, payload]}
    }
    case ITEM_REMOVE_SUCCESS:{
      let CartData=state.Cart.filter((item) => item.id !== payload)
      console.log(CartData,payload)
      return {...state, Cart:CartData}
    }
    case GET_PRODUCT_SUCCESS:{
      return {...state, isError:false, isLoading:false, products:payload}
    }
    default : return state

  }
}

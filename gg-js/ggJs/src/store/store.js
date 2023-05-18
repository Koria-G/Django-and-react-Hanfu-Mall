import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './modules/counterStore';
import { cartReducer } from './modules/cartStore';
import { createStore } from '@reduxjs/toolkit';
export default configureStore({
  // reducer:{
  //   counter:counterReducer,
  //   cart:cartReducer,
  // },
  reducer:cartReducer
});
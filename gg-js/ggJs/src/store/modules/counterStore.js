import { createSlice } from "@reduxjs/toolkit";

const counter=createSlice({
  name:'counter',
  initialState:{
    count:1
  },
  reducers:{
    add(state){
      state.count++
    },
    des(state){
      state.count--
    }
  }
})

const {add,des}=counter.actions
const counterReducer=counter.reducer

export{add,des}
export default counterReducer
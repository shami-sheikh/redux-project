import { createSlice } from "@reduxjs/toolkit";

export const  searchslice=createSlice({
    name:"search",
    initialState:{
query:"",
activeTab:"phtos",
loading:false,
error:null,
result:[]
    },
    reducers:{
setquery:(state,action)=>{
    state.query=action.payload
},
setactiveTav:(state,action)=>{
    state.activeTab=action.payload

},
setloading:(state,action)=>{
    state.loading=true;
    state.error=null
},
seterror:(state,action)=>{
    state.error=action.payload
},setResult:(state,action)=>{
    state.result=action.payload
    state.loading=false
},
cleaseresult:(state)=>{
    state.result=[]
}
    }
})
export const {setloading,setactiveTav,seterror,setquery,setResult,cleaseresult}= searchslice.actions;
export default searchslice.reducer
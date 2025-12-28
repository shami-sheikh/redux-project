import { createSlice } from "@reduxjs/toolkit"
const colectionslice=createSlice({
    name:"colection",
    initialState:{
       items:JSON.parse(localStorage.getItem('colection')) || []
    },
    reducers:{
        addcolection:(state,action)=>{
           const allreadyexists=state.items.find(
            item=>item.id===action.payload.id
           )
           if(!allreadyexists){
             state.items.push(action.payload)
            localStorage.setItem("colection",JSON.stringify(state.items))
           }
        },
        removecolection:(state,action)=>{
state.items=state.items.filter(
    item=>item.id !==action.payload
)
            localStorage.setItem("colection",JSON.stringify(state.items))

        },
        clearcolection:(state)=>{
state.items=[]
localStorage.removeItem("colection")
        }
    }
})
export const {addcolection,removecolection,clearcolection}=colectionslice.actions
export default colectionslice.reducer
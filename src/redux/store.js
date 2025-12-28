import {configureStore} from '@reduxjs/toolkit'
import searchsliceReduser from '../redux/searchslice'
import colectionReducer from "../redux/colectionslice"
export const store=configureStore({
    reducer:{
search:searchsliceReduser,
colection:colectionReducer
    }
})
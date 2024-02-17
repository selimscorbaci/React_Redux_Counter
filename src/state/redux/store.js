import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
//this is the store for all of our reducers
export default configureStore({
    reducer:{
        counter:counterReducer
    }
})

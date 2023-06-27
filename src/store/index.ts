import {configureStore} from '@reduxjs/toolkit'
import counterReducer from 'views/counter/store/counterSlice'

const store = configureStore({
    reducer:{counter: counterReducer}
})

export default store
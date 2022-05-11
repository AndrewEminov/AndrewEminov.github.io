import { configureStore } from '@reduxjs/toolkit'
import commonReducer from '../redux/reducers'
export default configureStore({
  reducer: {
    commonReducer,
  },
})
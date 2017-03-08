import { combineReducers } from 'redux'
import PeoplesReducer from './reducer_data_people'
const rootReducers = combineReducers({
  peoples: PeoplesReducer
})
export default rootReducers

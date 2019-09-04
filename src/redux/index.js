import {combineReducers} from 'redux'
import selectedFiltersReducer from './selectedFiltersReducer';

const appReducer = combineReducers({
  selectedFilters: selectedFiltersReducer
})

export default appReducer;

import {combineReducers,createStore} from 'redux';
import CategoryReducer from './reducers/CategoryReducer';
import CoursesReducer from './reducers/CoursesReducer';


const rootReducer = combineReducers({
    CoursesReducer: CoursesReducer,
    CategoryReducer: CategoryReducer
})

const store = createStore(rootReducer);
export default store;
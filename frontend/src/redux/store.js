import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { loading } from './reducers/loading';
import { reducer } from './reducers/reducer';
import { bookingReducer } from './reducers/bookingReducer';
const composeEnhancers = composeWithDevTools({
   
});

const rootReducers= combineReducers({
    reducer,
    loading,
    bookingReducer
})
const store = createStore(
 rootReducers,
  composeEnhancers(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);
export default store;
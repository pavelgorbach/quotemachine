import { createStore, combineReducers, applyMiddleware } from 'redux' 
import ReduxThunk from 'redux-thunk'

import { QuoteState } from '../features/quoteReducer'
import { quoteReducer } from '../features/quoteReducer'

const middleware = applyMiddleware(ReduxThunk)

const rootReducer = combineReducers<RootState>({
  quote: quoteReducer
})

export const store = createStore(rootReducer, middleware)

export type RootState = {
  quote: QuoteState
}

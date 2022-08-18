import { createStore, combineReducers, applyMiddleware } from 'redux' 
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { QuoteState } from '../features/quoteReducer'
import { quoteReducer } from '../features/quoteReducer'

const middleware = applyMiddleware(thunk)

const rootReducer = combineReducers<RootState>({
  quote: quoteReducer
})

export const store = createStore(rootReducer, composeWithDevTools(middleware))

export type RootState = {
  quote: QuoteState
}

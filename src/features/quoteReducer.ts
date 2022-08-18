import { Quote } from "./quoteTypes"
import { fetchQuote } from "./quoteAPI"
import { Dispatch } from "redux"

export type QuoteState =  {
  quote: Quote
  fetching: boolean
  error: string
}

const defaultQuoteState: QuoteState = {
  quote: {
    content: '',
    author: ''
  },
  fetching: false,
  error: ''
}

export type Actions = 
  | ReturnType<typeof fetching>
  | ReturnType<typeof success>
  | ReturnType<typeof error>

export const fetching = () => ({ type: 'FETCHING' as const })
export const success = (payload: Quote) => ({ type: 'SUCCESS' as const, payload })
export const error = (payload: string) => ({ type: 'ERROR' as const, payload })

export const getQuoteAsync = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetching())
    
    try {
      const resp = await fetchQuote()
      const data = await resp.json()

      return dispatch(success({ content: data.content, author: data.author }))
    } catch (e: any) {
      return dispatch(error(e.message))
    }
  }
}

export const quoteReducer = (state = defaultQuoteState, action: Actions): QuoteState => {
  switch(action.type) {
    case 'FETCHING':
      return {...state, fetching: true}
    case 'SUCCESS':
      return {...state, quote: action.payload, fetching: false }
    case 'ERROR':
      return {...state, error: action.payload, fetching: false }
    default:
      return state
  }
}
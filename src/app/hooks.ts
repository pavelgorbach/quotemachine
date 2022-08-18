import { useCallback, useEffect } from 'react' 
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'

import { RootState } from './store'
import { randomRGB } from '../app/utils'
import { Actions, getQuoteAsync } from '../features/quoteReducer'
import { selectQuote } from '../features/quoteSelectors'

export function useQuote() {
  const dispatch = useDispatch<ThunkDispatch<RootState, any, Actions>>()
  const quote = useSelector(selectQuote)
  
  useEffect(() => {
    dispatch(getQuoteAsync)
  }, [])
  
  const getNewQuote = useCallback(() => {
    dispatch(getQuoteAsync())
  }, [dispatch])
  
  const color = randomRGB()

  return {
    quote: {
      data: {
        ...quote.quote,
        color
      },
      fetching: quote.fetching,
      getNew: getNewQuote,
    }
  }
}
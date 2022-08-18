import { ReactNode } from "react"
import { Provider } from 'react-redux'

import { store } from "./store"

export default function Providers(p: { children: ReactNode }) {
  return (
    <Provider store={store}>
      {p.children}
    </Provider>
  )
}
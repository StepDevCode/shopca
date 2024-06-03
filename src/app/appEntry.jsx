import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { appRouter } from './appRouter'
import { store } from './appStore'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={appRouter} />
    </ReduxProvider>
  </React.StrictMode>
)

import { createBrowserRouter } from 'react-router-dom'

import { Layout } from './layout'
import { Home } from '../pages/home'
import { Catalog } from '../pages/catalog'
import { Product } from '../pages/product'
import { Cart } from '../pages/cart'

export const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <div>Error</div>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/catalog', element: <Catalog /> },
      { path: '/product/:id', element: <Product /> },
      { path: '/cart', element: <Cart /> },
    ],
  },
])

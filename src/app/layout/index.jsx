import { Outlet } from 'react-router-dom'

import { Header } from '../../widgets/header'
import { Footer } from '../../widgets/footer'

import '../../shared/styles/index.scss'

export const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  )
}

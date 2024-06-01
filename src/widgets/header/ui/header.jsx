import { Link } from 'react-router-dom'
import { CONTENT_NAVIGATION_MENU } from '../../../shared/consts'
import Logo from '../../../shared/assets/icons/logo.svg'

import './header.scss'

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link className="header__link">
            <img className="header__img" src={Logo} alt="Logo" />
          </Link>
          <ul className="header__list">
            {CONTENT_NAVIGATION_MENU.map((item) => (
              <li className="header__item" key={item.title}>
                <Link className="header__link" to={item.link}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

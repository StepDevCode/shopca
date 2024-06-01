import { Link } from 'react-router-dom'
import { SOCIAL_ICONS } from '../../../shared/consts'
import Logo from '../../../shared/assets/icons/logo.svg'
import Visa from '../../../shared/assets/icons/visa.svg'
import Mastercard from '../../../shared/assets/icons/mastercard.svg'
import Paypal from '../../../shared/assets/icons/paypal.svg'
import Gpay from '../../../shared/assets/icons/gpay.svg'
import ApplePay from '../../../shared/assets/icons/apple.svg'

import './footer.scss'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__top-column">
            <Link to={'/'}>
              <img className="footer__top-logo" src={Logo} alt="Logo" />
            </Link>
            <p className="footer__top-text">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <ul className="footer__top-list">
              {SOCIAL_ICONS.map((item) => (
                <li className="footer__top-item" key={item.alt}>
                  <Link className="footer__top-link" to={item.link}>
                    <div dangerouslySetInnerHTML={{ __html: item.svgCode }} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__top-column">
            <h5 className="footer__top-title">Company</h5>
            <ul className="footer__top-list footer-list">
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  About
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Features
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Works
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Career
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__top-column">
            <h5 className="footer__top-title">Help</h5>
            <ul className="footer__top-list footer-list">
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Customer Support
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Delivery Details
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Terms & Conditions
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__top-column">
            <h5 className="footer__top-title">FAQ</h5>
            <ul className="footer__top-list footer-list">
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Account
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Manage Deliveries
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Orders
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Payments
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__top-column">
            <h5 className="footer__top-title">Resources</h5>
            <ul className="footer__top-list footer-list">
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Free eBooks
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Development Tutorial
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  How to - Blog
                </Link>
              </li>
              <li className="footer-item">
                <Link className="footer-link" to={''}>
                  Youtube Playlist
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p className="footer__bottom-copy">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <ul className="footer__bottom-list">
            <li className="footer__bottom-item">
              <img src={Visa} alt="Visa" />
            </li>
            <li className="footer__bottom-item">
              <img src={Mastercard} alt="Mastercard" />
            </li>
            <li className="footer__bottom-item">
              <img src={Paypal} alt="Paypal" />
            </li>
            <li className="footer__bottom-item">
              <img src={Gpay} alt="Gpay" />
            </li>
            <li className="footer__bottom-item">
              <img src={ApplePay} alt="ApplePay" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

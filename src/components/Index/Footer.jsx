import React from 'react'
import { Router } from '../../routes'

export default function Footer() {
  return (
    <footer id="htc__footer">
      <div className="footer__container bg__cat--1">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-xs-12">
              <div className="footer">
                <h2 className="title__line--2">Chúng tôi</h2>
                <div className="ft__details">
                  <p>Cửa hàng Lâm Hoa chuyên cung cấp các sản phẩm và dịch vụ về cây cảnh...</p>
                  <div className="ft__social__link">
                    <ul className="social__link">
                      <li><a ><i className="icon-social-twitter icons"></i></a></li>

                      <li><a ><i className="icon-social-instagram icons"></i></a></li>

                      <li><a ><i className="icon-social-facebook icons"></i></a></li>

                      <li><a ><i className="icon-social-google icons"></i></a></li>

                      <li><a ><i className="icon-social-linkedin icons"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 xmt-40">
              <div className="footer">
                <h2 className="title__line--2">Thông tin thêm</h2>
                <div className="ft__inner">
                  <ul className="ft__list">
                    <li><a >Về chúng tôi</a></li>
                    <li><a >Chính sách giao hàng</a></li>
                    <li><a >Chính sách bảo mật</a></li>
                    <li><a >Điều khoản và điều kiện</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
              <div className="footer">
                <h2 className="title__line--2">Tài khoản</h2>
                <div className="ft__inner">
                  <ul className="ft__list">
                    <li><a onClick={() => { Router.push('/profile')}}>Tài khoản</a></li>
                    <li><a onClick={() => { Router.push('/cart')}}>Cart của bạn</a></li>
                    <li><a onClick={() => { Router.push('/wishlist')}}>Wishlist</a></li>
                    <li><a onClick={() => { Router.push('/checkout')}}>Thanh toán</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-2 col-sm-6 col-xs-12 xmt-40 smt-40">
              <div className="footer">
                <h2 className="title__line--2">Dịch vụ</h2>
                <div className="ft__inner">
                  <ul className="ft__list">
                    <li><a >Chăm sóc cây cảnh</a></li>
                    <li><a>Tư vấn</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12 xmt-40 smt-40">
              <div className="footer">
                <h2 className="title__line--2">Nhận tin tức</h2>
                <div className="ft__inner">
                  <div className="news__input">
                    <input type="text" placeholder="Tài khoản email của bạn*" />
                    <div className="send__btn">
                      <a className="fr__btn" >Gửi</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="htc__copyright bg__cat--5">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="copyright__inner">
                <p>Copyright© Lâm Hoa Store</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
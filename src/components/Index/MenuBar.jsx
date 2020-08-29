import React from 'react'
import { useCard } from '../../hooks/useCard'
import { useLogin } from '../../hooks/useLogin'
import { Router } from '../../routes.js'

export default function MenuBar() {
  const { card, setOpenCard } = useCard()
  const { setIsOpenUserCard } = useLogin()

  return (
    <header id="htc__header" className="htc__header__area header--one">
      <div id="sticky-header-with-topbar" className="mainmenu__wrap sticky__header">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5" style={{ padding: 0 }}>
              <div className="logo">
                <a><img src={require('../../../static/images/logo/4.png')} alt="logo images" /></a>
              </div>
            </div>
            <div className="col-md-7 col-lg-8 col-sm-5 col-xs-3" style={{ padding: 0 }}>
              <nav className="main__menu__nav hidden-xs hidden-sm">
                <ul className="main__menu">
                  <li className="drop"><a onClick={() => { Router.push('/') }}>Trang chủ</a></li>
                  <li className="drop"><a onClick={() => { Router.push('/') }}>Danh mục</a>
                    <ul className="dropdown">
                      <li><a>Cây cảnh phong thuỷ</a></li>
                      <li><a>Cây cảnh trong nhà</a></li>
                      <li><a>Cây cảnh để bàn</a></li>
                      <li><a>Cây cảnh văn phòng</a></li>
                      <li><a>Cây cảnh sen đá</a></li>
                      <li><a>Cây thuỷ sinh</a></li>
                      <li><a>Cây dây leo</a></li>
                      <li><a>Cây xương rồng cảnh</a></li>
                    </ul>
                  </li>
                  <li className="drop"><a onClick={() => { Router.push('/product') }}>Sản phẩm</a></li>
                  <li className="drop"><a onClick={() => { Router.push('/news') }}>Tin tức</a></li>
                  <li className="drop"><a>Chăm sóc</a>
                    <ul className="dropdown">
                      <li><a>Cây văn phòng</a></li>
                      <li><a>Cây thuỷ sinh</a></li>
                      <li><a>Sen đá xương rồng</a></li>
                    </ul>
                  </li>
                  <li className="drop"><a >Giới thiệu</a></li>
                  <li className="drop"><a >Chính sách</a>
                    <ul className="dropdown">
                      <li><a >Mua hàng</a></li>
                      <li><a >Bảo hành</a></li>
                      <li><a >Đổi trả</a></li>
                      <li><a >Giao hàng</a></li>
                      <li><a >Bảo mật</a></li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-md-3 col-lg-2 col-sm-4 col-xs-4" style={{ padding: 0 }}>
              <div className="header__right">
                <div className="header__search search search__open">
                  <a onClick={() => {
                    const body = document.getElementsByTagName("BODY")[0]
                    if (body) {
                      body.classList.toggle('search__box__show__hide')
                    }
                  }}><i className="icon-magnifier icons"></i></a>
                </div>
                <div className="header__account">
                  <a onClick={() => { setIsOpenUserCard(true)} }><i className="icon-user icons"></i></a>
                </div>
                <div className="htc__shopping__cart">
                  <a className="cart__menu" onClick={(event) => {
                    event.preventDefault()
                    setOpenCard()
                  }}>
                    <i className="icon-handbag icons" />
                  </a>
                  {(card && card.length > 0) && (
                    <a style={{ cursor: 'pointer' }} onClick={(event) => {
                      event.preventDefault()
                      setOpenCard()
                    }}><span className="htc__qua">{card.length}</span></a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
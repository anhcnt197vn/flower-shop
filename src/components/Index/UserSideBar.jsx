import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'
import Register from './Register'
import Login from './Login'
import Profile from './Profile'

export default function UserSideBar() {
  const { me, isLogin, isOpenUserCard, setIsOpenUserCard } = useLogin()
  const [isOpenRegister, setIsOpenRegister] = useState(false)
  const classNameAdded = isOpenUserCard ? ' user__cart__on' : ''

  return (
    <div className={"user__cart" + classNameAdded}>
      <div className="shopping__cart__inner">
        <div className="offsetmenu__close__btn">
          <a onClick={() => { setIsOpenUserCard(false) }}><i className="zmdi zmdi-close"></i></a>
        </div>
        <div className="shp__cart__wrap">
          <div className="shp__single__product">
            <div className="accordion__body">
              <div className="accordion__body__form">
                {!me && !isLogin && isOpenRegister && (
                  <Register openRegister={() => {
                    setIsOpenRegister(!isOpenRegister)
                  }} />
                )}
                {!me && !isLogin && !isOpenRegister && (
                  <Login openRegister={() => {
                    setIsOpenRegister(!isOpenRegister)
                  }} />
                )}
                {me && !isLogin && !me.is_activate && (
                  <div>
                    <div style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'center',
                    }}>
                      <img src='/static/images/logo/complete.png' width="150" height="150" />
                    </div>
                    <p style={{ color: "#c43b68", marginTop: 20, fontSize: 16 }}>* Bạn vui lòng đăng nhập vào gmail để hoàn tất xác thực đăng kí tài khoản mới!</p>
                  </div>
                )}
                {me && isLogin && me.is_activate && (
                  <Profile />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
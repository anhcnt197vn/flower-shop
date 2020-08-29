import React from 'react'
import { useLogin } from '../../hooks/useLogin'
import { Router } from '../../routes'

function Profile() {
  const { me, onLogout } = useLogin()

  return (
    <React.Fragment>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 30,
        borderBottom: '1px solid #c43b68',
        paddingBottom: 30,
      }}>
        <div>
          <img src={me.avatar || '/static/images/defaultAva.png'} width="120" height="120" style={{ borderRadius: '50%' }} />
        </div>
        <div style={{ marginLeft: 30 }}>
          <p style={{ fontSize: 18, color: "#c43b68", marginTop: 10 }}>Tên hiển thị:</p>
          <p style={{ marginLeft: 10, marginTop: 5 }}>{me.name}</p>
          <p style={{ fontSize: 18, color: "#c43b68", marginTop: 10 }}>Email</p>
          <p style={{ marginLeft: 10, marginTop: 5, maxWidth: 200, textOverflow: 'ellipsis', overflow: 'hidden' }}>{me.email}</p>
        </div>
      </div>
      <ul className="shopping__btn">
        <li><a onClick={() => { Router.push('/profile') }}>Thông tin cá nhân</a></li>
        <li><a onClick={() => { Router.push('/wishlist') }}>Sản phẩm yêu thích</a></li>
        <li><a onClick={() => { Router.push('/history') }}>Lịch sử đặt hàng</a></li>
        <li><a onClick={() => { onLogout() }}>Đăng xuất</a></li>
      </ul>
    </React.Fragment>
  )
}

export default Profile
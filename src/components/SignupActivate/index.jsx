import React, { useEffect } from 'react'
import activateCustomer from '../../schema/mutations/activateCustomer'
import {Router} from '../../routes'
import { useLogin } from '../../hooks/useLogin'

export default function Index({ query }) {
  const { setIsLogin, setMe } = useLogin()

  useEffect(() => {
    async function signupActivate() {
      try {
        const updatedCustomer = await activateCustomer(query && query.id)
        if (updatedCustomer && updatedCustomer.is_activate) {
          localStorage.setItem('@me', JSON.stringify({ 
            name: updatedCustomer.name, 
            email: updatedCustomer.email,
            is_activate: 1, 
          }))
          setMe(updatedCustomer)
          setIsLogin(true)
        }
      } catch (error) {
        alert(error)
      }
    }

    signupActivate()
  }, [])

  return (
    <div className="wrapper" style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <div style={{
        width: '100%',
        backgroundColor: '#f3f3f3',
        display: 'flex',
        justifyContent: 'center',
      }}>
        <img src='/static/images/logo/complete.png' width="150" height="150" />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
      }}>
        <h1>Chúc mừng bạn đã đăng kí tài khoản thành công!</h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 20,
      }}>
        <a onClick={() => {
          try {
            Router.push('/')
          } catch (error) {
            alert(error)
          }
        }} style={{
          background: '#c43b68 none repeat scroll 0 0',
          color: '#ffffff',
          fontSize: 14,
          height: 57,
          lineHeight: '57px',
          textAlign: 'center',
          textTransform: 'capitalize',
          transition: 'all 0.3s ease 0s',
          width: 200,
          display: 'inline-block'
        }}>Trang chủ</a>
      </div>
    </div>
  )
}
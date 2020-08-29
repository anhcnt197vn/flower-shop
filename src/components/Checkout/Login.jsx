import React, { useState, useEffect } from 'react'
import { useLogin } from '../../hooks/useLogin'
import { isEmail, validatePassword } from '../../Utils/validator'

export default function Login() {
  const { login } = useLogin()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const onLogin = async () => {
    event.preventDefault()
    await login({ email, password })
  }

  const validate = () => {
    if (!email || email.trim().length === 0) {
      setError({ emailError: '(* Vui lòng nhập email)' })
      return false
    }
    if (!isEmail(email)) {
      setError({ emailError: '(* Địa chỉ email không chính xác, vui lòng nhập lại)' })
      return false
    }
    if (!password || password.trim().length === 0) {
      setError({ passwordError: '(* Vui lòng nhập password)' })
      return false
    }
    const pwError = validatePassword(password)
    if (pwError) {
      setError({ passwordError: pwError })
      return false
    }

    return true
  }

  useEffect(() => {
    const listener = async (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        if (validate()) {
          await onLogin()
        }
      }
    }
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    }
  })

  return (
    <>
      <div className="accordion__title">
        Vui lòng đặng nhập để thanh toán!
      </div>
      <div className="accordion__body">
        <div className="accordion__body__form">
          <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
            <div className="col-md-7">
              <div className="checkout-method__login">
                <form action="#">
                  <h5 className="checkout-method__title">Vui lòng điền tài khoản đăng nhập:</h5>
                  <div className="single-input">
                    <label htmlFor="user-email">Email</label>
                    <input type="email" id="user-email" value={email} onChange={(event) => { setEmail(event.target.value) }}/>
                    {error && error.emailError && (
                      <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.emailError}</i></p>
                    )}
                  </div>
                  <div className="single-input">
                    <label htmlFor="user-pass">Mật khẩu</label>
                    <input type="password" id="user-pass" value={password} onChange={(event) => { setPassword(event.target.value) }}/>
                    {error && error.passwordError && (
                      <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.passwordError}</i></p>
                    )}
                  </div>
                  <a>Quên mật khẩu?</a>
                  <div className="dark-btn">
                    <a onClick={() => { if (validate()) { onLogin() }}}>Đăng nhập</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
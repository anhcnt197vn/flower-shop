import React, { useState, useEffect } from "react"
import { isEmail, validatePassword } from "../../Utils/validator"
import { useLogin } from "../../hooks/useLogin"

export default function Register({ openRegister }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [repassword, setRePassword] = useState('')
  const [error, setError] = useState('')
  const { register } = useLogin()

  useEffect(() => {
    const listener = async (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        if (validate()) {
          await onRegister()
        }
      }
    }
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    }
  })

  const onRegister = async () => {
    event.preventDefault()
    await register({ name, email, password })
  }

  const validate = () => {
    if (!name || name.trim().length === 0) {
      setError({ nameError: '(* Vui lòng nhập tên hiển thị)' })
      return false
    }
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
    if (password !== repassword) {
      setError({ repasswordError: '(* Mật khẩu nhập lại không chính xác)' })
      return false
    }

    return true
  }

  return (
    <div className="row" style={{ marginRight: 0, marginLeft: 0 }}>
      <div className="checkout-method__login">
        <form action="#">
          <h5 className="checkout-method__title">Vui lòng điền vào thông tin tài khoản</h5>
          <div className="single-input">
            <label htmlFor="user-name">Tên hiển thị:</label><br />
            <input type="text" id="user-name" value={name} onChange={(event) => {
              setError('')
              setName(event.target.value)
              event.preventDefault()
            }} />
            {error && error.nameError && (
              <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.nameError}</i></p>
            )}
          </div>
          <div className="single-input">
            <label htmlFor="user-email">Email:</label><br />
            <input type="email" id="user-email" value={email} onChange={(event) => {
              setError('')
              setEmail(event.target.value)
              event.preventDefault()
            }} />
            {error && error.emailError && (
              <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.emailError}</i></p>
            )}
          </div>
          <div className="single-input">
            <label htmlFor="user-pass">Mật khẩu:</label>
            <input type="password" id="user-pass" value={password} onChange={(event) => {
              setError('')
              setPassword(event.target.value)
              event.preventDefault()
            }} />
            {error && error.passwordError && (
              <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.passwordError}</i></p>
            )}
          </div>
          <div className="single-input">
            <label htmlFor="user-pass">Nhập lại mật khẩu:</label>
            <input type="password" id="user-re-pass" value={repassword} onChange={(event) => {
              setError('')
              setRePassword(event.target.value)
              event.preventDefault()
            }}
            />
            {error && error.repasswordError && (
              <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.repasswordError}</i></p>
            )}
          </div>
          <div>
            <a onClick={() => { openRegister() }}>Bạn đã có tài khoản?</a>
          </div>
          <div className="dark-btn">
            <a onClick={() => {
              if (validate()) {
                onRegister()
              }
            }}
            >Đăng kí</a>
          </div>
        </form>
      </div>
    </div>
  )
}
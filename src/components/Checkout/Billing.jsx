import React, { useState } from 'react'
import { isPhoneNumber, isEmail } from '../../Utils/validator'
import { useCard } from '../../hooks/useCard'
import { useLogin } from '../../hooks/useLogin'

export default function Billing() {
  const { card, checkout } = useCard()
  const { me } = useLogin()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [address, setAddress] = useState('')
  const [note, setNote] = useState('')
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = () => {
    if (!name) {
      setError({ nameError: '(* Vui lòng nhập tên)' })
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
    if (!phoneNumber) {
      setError({ phoneError: '(* Vui lòng nhập số điện thoại)' })
      return false
    }
    if (!isPhoneNumber(phoneNumber)) {
      setError({ phoneError: '(* Số điện thoại không chính xác)' })
      return false
    }
    if (!address) {
      setError({ addressError: '(* Vui lòng nhập địa chỉ nhận hàng)' })
      return false
    }

    return true
  }

  const onCheckout = async () => {
    if (!card || !card.length) {
      alert('Vui lòng thêm sản phẩm bạn muốn mua vào giỏ hàng')
    }
    if (validate()) {
      const totalPrice = card && card.reduce((previousValue, currentValue) => {
        const totalOfCurrentValue = currentValue.price * currentValue.count
        return previousValue + totalOfCurrentValue
      }, 0)

      const isTrue = await checkout({
        name,
        email,
        note,
        address,
        id_customer: me.id,
        phone_number: phoneNumber,
        total_price: totalPrice,
      })
      setIsSuccess(isTrue)
    }
  }

  if (isSuccess) {
    return (
      <div>
        <h1 style={{ fontSize: 26 }}>Bạn đã đặt hàng thành công, vui lòng check email!</h1>
        <div style={{
          width: '100%',
          display: 'flex',
          marginTop: 20,
          justifyContent: 'center',
        }}>
          <img src='/static/images/logo/complete.png' width="150" height="150" />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="accordion__title">
        Vui lòng nhập thông tin dưới đây
      </div>
      <div className="accordion__body" style={{ paddingTop: 0 }}>
        <div className="bilinfo">
          <form action="#">
            <div className="row">
              <div className="col-md-12">
                <div className="single-input">
                  <input type="text" placeholder="Họ tên đầy đủ" value={name}
                    onChange={(event) => {
                      setError('')
                      setName(event.target.value)
                    }}
                  />
                  {error && error.nameError && (
                    <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.nameError}</i></p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-input">
                  <input type="text" placeholder="Email" value={email}
                    onChange={(event) => {
                      setError('')
                      setEmail(event.target.value)
                    }}
                  />
                  {error && error.emailError && (
                    <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.emailError}</i></p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-input">
                  <input type="text" placeholder="Số điện thoại" value={phoneNumber}
                    onChange={(event) => {
                      setError('')
                      setPhoneNumber(event.target.value)
                    }}
                  />
                  {error && error.phoneError && (
                    <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.phoneError}</i></p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-input">
                  <input type="text" placeholder="Địa chỉ nhận hàng" value={address}
                    onChange={(event) => {
                      setError('')
                      setAddress(event.target.value)
                    }}
                  />
                  {error && error.addressError && (
                    <p style={{ fontSize: 14, color: '#c43b68' }}><i>{error.addressError}</i></p>
                  )}
                </div>
              </div>
              <div className="col-md-12">
                <div className="single-input">
                  <textarea
                    name="message"
                    value={note}
                    className="form-control"
                    style={{ border: '1px solid #888' }}
                    rows="5"
                    cols="30"
                    placeholder="Lời nhắn"
                    onChange={(event) => {
                      setError('')
                      setNote(event.target.value)
                    }}
                  />
                </div>
              </div>
              <div className="col-md-12">
                <ul className="cr__btn" style={{ marginTop: 20 }}>
                  <li><a onClick={() => {
                    onCheckout()
                  }} style={{ width: '100%', textAlign: 'center' }}>Đặt hàng ngay</a></li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
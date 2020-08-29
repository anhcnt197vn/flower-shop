import React from 'react'
import Login from "./Login"
import Billing from "./Billing"
import Footer from "../Index/Footer"
import Banner from "../Card/Banner"
import { useLogin } from "../../hooks/useLogin"
import { useCard } from "../../hooks/useCard"
import { Router } from "../../routes"
import convertToVnd from "../../Utils/convertToVnd"

export default function CheckoutContainer() {
  const { isLogin, me } = useLogin()
  const { card, removeCard } = useCard()

  if (!card) {
    return null
  }
    
  const totalPrice = card && card.reduce((previousValue, currentValue) => {
    const totalOfCurrentValue = currentValue.price * currentValue.count
    return previousValue + totalOfCurrentValue
  }, 0)

  return (
    <div className="wrapper">
      <Banner />
      <div className="checkout-wrap ptb--50">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="checkout__inner">
                <div className="accordion-list">
                  <div className="accordion">
                    {isLogin ? <Billing /> : <Login />}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="order-details">
                <h5 className="order-details__title">Đơn hàng của bạn</h5>
                <div className="order-details__item">
                  {card.map((item, index) => {
                    return (
                      <div className="single-item" key={index}>
                        <div className="single-item__thumb">
                          <img src={item.image} alt="ordered item" />
                        </div>
                        <div className="single-item__content">
                          <a onClick={() => { Router.pushRoute(`/product_detail/${item.id}`) }}>{item.name}</a>
                          <span className="price">{convertToVnd(item.price)}</span>
                        </div>
                        <div className="single-item__remove">
                          <a onClick={() => {
                            removeCard(item)
                          }}><i className="zmdi zmdi-delete"></i></a>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="ordre-details__total">
                  <h5>Tổng tiền</h5>
                  <span className="price">{convertToVnd(totalPrice)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
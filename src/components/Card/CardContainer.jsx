import React from 'react'
import { useCard } from '../../hooks/useCard'
import { Router } from '../../routes'
import convertToVnd from '../../Utils/convertToVnd'

export default function CardContainer() {
  const { card, addToCard, reduceCard, removeCard } = useCard()

  const onCountChange = (event, item) => {
    event.preventDefault()
    if (event.target.value > item.count) {
      addToCard(item)
    } else {
      reduceCard(item)
    }
  }
  
  const totalPrice = card && card.reduce((previousValue, currentValue) => {
    const totalOfCurrentValue = currentValue.price * currentValue.count
    return previousValue + totalOfCurrentValue
  }, 0)

  return (
    <div className="cart-main-area ptb--50 bg__white">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12">
                    <form action="#">               
                        <div className="table-content table-responsive">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="product-thumbnail">Hình ảnh</th>
                                        <th className="product-name">Tên sản phẩm</th>
                                        <th className="product-price">Giá</th>
                                        <th className="product-quantity">Số lượng</th>
                                        <th className="product-subtotal">Thành tiền</th>
                                        <th className="product-remove">Xoá</th>
                                    </tr>
                                </thead>
                                <tbody>
                                 {card && card.map((item, index) => { 
                                    return (
                                      <tr key={index}>
                                        <td className="product-thumbnail"><a><img width="99" height="119" src={item.image} alt="product img" /></a></td>
                                        <td className="product-name"><a>{item.name}</a>
                                            <ul  className="pro__prize">
                                                <li className="old__prize">{convertToVnd(item.price)}</li>
                                                <li>{convertToVnd(item.price)}</li>
                                            </ul>
                                        </td>
                                        <td className="product-price"><span className="amount">{convertToVnd(item.price)}</span></td>
                                        <td className="product-quantity"><input type="number" value={item.count} onChange={(event) => { onCountChange(event, item) }} /></td>
                                        <td className="product-subtotal">{convertToVnd(item.price * item.count)}</td>
                                        <td className="product-remove"><a onClick={() => { removeCard(item) }}><i className="icon-trash icons"></i></a></td>
                                      </tr>
                                    )
                                  })}
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-12 col-xs-12">
                                <div className="ht__coupon__code">
                                    <span>Vui lòng nhập mã giảm giá của bạn</span>
                                    <div className="coupon__box">
                                        <input type="text" placeholder="" />
                                        <div className="ht__cp__btn">
                                            <a href="#">Nhập</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 col-xs-12 smt-40 xmt-40">
                                <div className="htc__cart__total">
                                    <h6>Tổng thanh toán</h6>
                                    <div className="cart__desk__list">
                                        <ul className="cart__desc">
                                            <li>Tổng tiền</li>
                                            <li>Giảm giá</li>
                                            <li>Ưu đãi</li>
                                        </ul>
                                        <ul className="cart__price">
                                            <li>{convertToVnd(totalPrice)}</li>
                                            <li>0</li>
                                            <li>0</li>
                                        </ul>
                                    </div>
                                    <div className="cart__total">
                                        <span>Tổng tiền cần thanh toán</span>
                                        <span>{convertToVnd(totalPrice)}</span>
                                    </div>
                                    <ul className="payment__btn">
                                        <li className="active"><a onClick={() => { Router.push('/checkout') }}>Thanh Toán</a></li>
                                        <li><a onClick={() => { Router.push('/') }}>Tiếp tục shopping</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    </div>
  )
}
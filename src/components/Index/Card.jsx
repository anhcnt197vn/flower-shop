import React from 'react'
import { useCard } from '../../hooks/useCard'
import { Router } from '../../routes.js'
import convertToVnd from '../../Utils/convertToVnd'

export default function Card() {
  const { card, isOpenCard, setOpenCard, removeCard } = useCard()
  const totalPrice = card && card.reduce((previousValue, currentValue) => {
    const totalOfCurrentValue = currentValue.price * currentValue.count
    return previousValue + totalOfCurrentValue
  }, 0)
  const classNameAdded = isOpenCard ? ' shopping__cart__on' : ''

  return (
    <div className={"shopping__cart" + classNameAdded}>
      <div className="shopping__cart__inner">
        <div className="offsetmenu__close__btn">
          <a onClick={setOpenCard}><i className="zmdi zmdi-close"></i></a>
        </div>
        <div className="shp__cart__wrap">
          {card && card.map((item, index) => {
            return (
              <div key={index} className="shp__single__product">
                <div className="shp__pro__thumb">
                  <a onClick={() => { Router.push(`/product_detail/${item.id}`)}}>
                    <img style={{ width: 99, height: 119, maxWidth: 99 }} src={item.image} alt="product img" />
                  </a>
                </div>
                <div className="shp__pro__details">
                  <h2><a onClick={() => { Router.push(`/product_detail/${item.id}`)}}>{item.name}</a></h2>
                  <span className="quantity">Số lượng: {item.count}</span>
                  <span className="shp__price">{convertToVnd(item.price)}</span>
                </div>
                <div className="remove__btn">
                  <a onClick={() => { removeCard(item)} } title="Remove this item"><i className="zmdi zmdi-close"></i></a>
                </div>
              </div>
            )
          })}
        </div>
        <ul className="shoping__total">
          <li className="subtotal">Tổng tiền:</li>
          <li className="total__price">{convertToVnd(totalPrice)}</li>
        </ul>
        <ul className="shopping__btn">
          <li><a onClick={() => { Router.push('/card')}}>Xem card</a></li>
          <li className="shp__checkout"><a onClick={() => { Router.push('/checkout')}}>Thanh toán</a></li>
        </ul>
      </div>
    </div>
  )
}
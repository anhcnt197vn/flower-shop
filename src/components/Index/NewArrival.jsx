import React, { useEffect } from 'react'
import { useProducts } from '../../hooks/useProduct'
import { useCard } from '../../hooks/useCard'
import { Router } from '../../routes.js'
import { useLogin } from '../../hooks/useLogin'
import createWishlist from '../../schema/mutations/createWishlist'

export default function NewArrival() {
  const { product } = useProducts()
  const { addToCard } = useCard()
  const { me } = useLogin()
  const newArrival = product && product.slice(0, 8)

  const addToWishlist = async (productId) => {
    await createWishlist({ customer_id: me.id, product_id: productId})
  }

  return (
    <section className="htc__category__area ptb--100" style={{paddingTop: 60}}>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section__title--2 text-center">
              <h2 className="title__line">SẢN PHẨM MỚI</h2>
              <p>Dưới đây là những sản phẩm mới và đang rất hot</p>
            </div>
          </div>
        </div>
        <div className="htc__product__container">
          <div className="row">
            <div className="product__list clearfix mt--30">
              {newArrival && newArrival.map((item, key) => {
                return (
                  <div key={key} className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                    <div className="category">
                      <div className="ht__cat__thumb">
                        <a onClick={() => { Router.pushRoute('product_detail', { id:item.id })}}>
                          <img width="213px" height="213px" src={item.image} alt="product images" />
                        </a>
                      </div>
                      <div className="fr__hover__info">
                        <ul className="product__action">
                          <li><a onClick={() => { addToWishlist(item.id) }}><i className="icon-heart icons"></i></a></li>
                          <li>
                            <a onClick={() => { addToCard(item) }}>
                              <i className="icon-handbag icons"></i>
                            </a>
                          </li>
                          <li><a onClick={() => { Router.push(`/product_detail/${item.id}`) }}><i className="icon-shuffle icons"></i></a></li>
                        </ul>
                      </div>
                      <div className="fr__product__inner">
                        <h4><a onClick={() => { Router.push(`/product_detail/${item.id}`) }}>{item.name}</a></h4>
                        <ul className="fr__pro__prize">
                          <li className="old__prize"><strike>{(item.previous_price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</strike></li>
                          <li>{(item.price).toLocaleString('it-IT', {style : 'currency', currency : 'VND'})}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
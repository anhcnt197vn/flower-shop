import React, { useState, useEffect } from "react"
import { useProducts } from "../../hooks/useProduct"
import convertToVnd from "../../Utils/convertToVnd"
import getBestSellerProducts from '../../schema/queries/getBestSellerProducts'
import { Router } from "../../routes"
import { useCard } from "../../hooks/useCard"

export default function BestSeller() {
  const { product } = useProducts()
  const { addToCard } = useCard()
  const [bestSeller, setBestSeller] = useState([])

  useEffect(() => {
    const getBestSellerItem = async () => {
      if (product) {
        const bestSellerFilter =  await getBestSellerProducts()
        if (bestSellerFilter && bestSellerFilter.length) {
          const bestSellerItem = product.filter((item) => {
            return bestSellerFilter.find((best) => best.product_id === item.id)
          })
          setBestSeller(bestSellerItem)
        } else {
          const bestSellerItem = product.filter((item) => item.best_seller).slice(0, 4)
          setBestSeller(bestSellerItem)
        }
      }
    }

    getBestSellerItem()
  }, [product])

  const addToWishlist = async (productId) => {
    await createWishlist({ customer_id: me.id, product_id: productId})
  }

  return (
    <section className="ftr__product__area ptb--100">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section__title--2 text-center">
              <h2 className="title__line">SẢN PHẨM BÁN CHẠY</h2>
              <p>Những sản phẩm bán chạy và đang rất hot</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="product__wrap clearfix">
            {bestSeller.map((item, index) => {
              return (
                <div key={index} className="col-md-4 col-lg-3 col-sm-4 col-xs-12">
                  <div className="category">
                    <div className="ht__cat__thumb">
                      <a onClick={() => {
                          Router.pushRoute(`/product_detail/${item.id}`)
                        }}
                      >
                        <img src={item.image} alt="product images" />
                      </a>
                    </div>
                    <div className="fr__hover__info">
                      <ul className="product__action">
                        <li><a onClick={() => { addToWishlist(item.id) }}><i className="icon-heart icons"></i></a></li>
                        <li><a onClick={() => { addToCard(item) }}><i className="icon-handbag icons"></i></a></li>
                        <li><a onClick={() => { Router.push(`/product_detail/${item.id}`) }}><i className="icon-shuffle icons"></i></a></li>
                      </ul>
                    </div>
                    <div className="fr__product__inner">
                      <h4><a onClick={() => {
                        Router.pushRoute(`/product_detail/${item.id}`)
                      }}>{item.name}</a></h4>
                      <ul className="fr__pro__prize">
                        <li className="old__prize"><strike>{convertToVnd(item.previous_price)}</strike></li>
                        <li>{convertToVnd(item.price)}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
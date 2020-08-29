import React, { useState, useEffect } from 'react'
import { useProducts } from '../../hooks/useProduct'
import getLikeProduct from '../../schema/queries/getLikeProduct'
import createWishlist from '../../schema/mutations/createWishlist'
import { Router } from '../../routes'
import convertToVnd from '../../Utils/convertToVnd'
import { useCard } from '../../hooks/useCard'

export default function TopRated() {
  const { product } = useProducts()
  const { addToCard } = useCard()
  const [likeProduct, setLikeProduct] = useState([])

  const addToWishlist = async (productId) => {
    await createWishlist({ customer_id: me.id, product_id: productId})
  }

  useEffect(() => {
    const getBestLikeItem = async () => {
      if (product) {
        const likeProductFilter = await getLikeProduct()
        if (likeProductFilter && likeProductFilter.length) {
          const bestLike = product.filter((item) => {
            return likeProductFilter.find((best) => best.product_id === item.id)
          })
          setLikeProduct(bestLike)
        } else {
          const bestLike = product.slice(0, 3)
          setLikeProduct(bestLike)
        }
      }
    }

    getBestLikeItem()
  }, [product])

  return (
    <section className="top__rated__area bg__white pt--100 pb--110">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section__title--2 text-center">
              <h2 className="title__line">SẢN PHẨM YÊU THÍCH</h2>
              <p>Những sản phẩm có phản hồi tốt nhất từ người dùng</p>
            </div>
          </div>
        </div>
        <div className="row mt--20">
          {likeProduct && likeProduct.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                <div className="htc__best__product">
                  <div className="htc__best__pro__thumb">
                    <a onClick={() => { Router.push(`/product_detail/${item.id}`) }}>
                      <img src={item.image} alt="small product" />
                    </a>
                  </div>
                  <div className="htc__best__product__details">
                    <h2><a onClick={() => { Router.push(`/product_detail/${item.id}`) }}>{item.name}</a></h2>
                    <ul className="rating">
                      <li><i className="icon-star icons"></i></li>
                      <li><i className="icon-star icons"></i></li>
                      <li><i className="icon-star icons"></i></li>
                      <li className="old"><i className="icon-star icons"></i></li>
                      <li className="old"><i className="icon-star icons"></i></li>
                    </ul>
                    <ul className="top__pro__prize">
                      <li className="old__prize"><strike>{convertToVnd(item.previous_price)}</strike></li>
                      <li>{convertToVnd(item.price)}</li>
                    </ul>
                    <div className="best__product__action">
                      <ul className="product__action--dft">
                        <li><a onClick={() => { addToWishlist(item.id) }}><i className="icon-heart icons"></i></a></li>
                        <li><a onClick={() => { addToCard(item) }}><i className="icon-handbag icons"></i></a></li>
                        <li><a onClick={() => { Router.push(`/product_detail/${item.id}`) }}><i className="icon-shuffle icons"></i></a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
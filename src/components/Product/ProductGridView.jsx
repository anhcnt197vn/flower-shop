import React from 'react'
import { Router } from '../../routes'
import { useProducts } from "../../hooks/useProduct"
import convertToVnd from '../../Utils/convertToVnd'
import { useCard } from "../../hooks/useCard"
import { BIG_PAGE_ITEMS } from '../../Utils/pagination'

export default function ProductGridView() {
  const { product, currentPage } = useProducts()
  const { addToCard } = useCard() 

  if (!product) {
    return null
  }

  const startIndex = ((currentPage - 1) * BIG_PAGE_ITEMS)
  const itemToDisplay = product.slice(startIndex, startIndex + BIG_PAGE_ITEMS) || []
  
  const addToWishlist = async (productId) => {
    await createWishlist({ customer_id: me.id, product_id: productId})
  }

  return (
    <div role="tabpanel" id="grid-view" className="single-grid-view tab-pane fade in active clearfix">
      {itemToDisplay.map((item, index) => {
        return (
          <div className="col-md-4 col-lg-4 col-sm-6 col-xs-12" key={index}>
            <div className="category">
              <div className="ht__cat__thumb">
                <a onClick={() => Router.push(`/product_detail/${item.id}`)}>
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
                <h4><a onClick={() => Router.push(`/product_detail/${item.id}`)}>{item.name}</a></h4>
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
  )
}
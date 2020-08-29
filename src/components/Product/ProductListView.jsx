import React from 'react'
import { Router } from '../../routes'
import { useProducts } from '../../hooks/useProduct'
import convertToVnd from '../../Utils/convertToVnd'
import { useCard } from '../../hooks/useCard'
import { SMALL_PAGE_ITEMS } from '../../Utils/pagination'

export default function ProductListView() {
  const { product, currentPage } = useProducts()
  const { addToCard } = useCard()

  if (!product) {
    return null
  }

  const startIndex = ((currentPage - 1) * SMALL_PAGE_ITEMS)
  const itemToDisplay = product.slice(startIndex, startIndex + SMALL_PAGE_ITEMS) || []
  return (
    <div role="tabpanel" id="list-view" className="single-grid-view tab-pane fade clearfix">
      <div className="col-xs-12">
        <div className="ht__list__wrap">
          {itemToDisplay.map((item, index) => {
            return (
              <div className="ht__list__product" key={index} style={{ borderBottom: '1px solid #cfcfcf'}}>
                <div className="ht__list__thumb" style={{ width: 290, height: 330 }}>
                  <a onClick={() => Router.push(`/product_detail/${item.id}`)}><img src={item.image} /></a>
                </div>
                <div className="htc__list__details">
                  <h2><a onClick={() => Router.push(`/product_detail/${item.id}`)}>{item.name}</a></h2>
                  <ul className="pro__prize">
                    <li className="old__prize"><strike>{convertToVnd(item.previous_price)}</strike></li>
                    <li>{convertToVnd(item.price)}</li>
                  </ul>
                  <ul className="rating">
                    <li><i className="icon-star icons"></i></li>
                    <li><i className="icon-star icons"></i></li>
                    <li><i className="icon-star icons"></i></li>
                    <li className="old"><i className="icon-star icons"></i></li>
                    <li className="old"><i className="icon-star icons"></i></li>
                  </ul>
                  <p className="max4length">{item.short_description}</p>
                  <div className="fr__list__btn">
                    <a className="fr__btn" onClick={() => { addToCard(item) }}>Thêm vào giỏ</a>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
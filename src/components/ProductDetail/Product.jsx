import React from 'react'
import convertToVnd from '../../Utils/convertToVnd'

export default function Product({ product }) {
  if (!product) {
    return null
  }

  return (
    <section className="htc__product__details bg__white ptb--50">
      <div className="htc__product__details__top">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-5 col-sm-12 col-xs-12">
              <div className="htc__product__details__tab__content">
                <div className="product__big__images">
                  <div className="portfolio-full-image tab-content">
                    <div role="tabpanel" className="tab-pane fade in active" id="img-tab-1">
                      <img src={product.image} alt="full-image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-7 col-sm-12 col-xs-12 smt-40 xmt-40">
              <div className="ht__product__dtl">
                <h2>{product.name}</h2>
                <h6>Model: <span>MNG001</span></h6>
                <ul className="rating">
                  <li><i className="icon-star icons"></i></li>
                  <li><i className="icon-star icons"></i></li>
                  <li><i className="icon-star icons"></i></li>
                  <li className="old"><i className="icon-star icons"></i></li>
                  <li className="old"><i className="icon-star icons"></i></li>
                </ul>
                <ul className="pro__prize">
                  <li className="old__prize"><strike>{convertToVnd(product.previous_price)}</strike></li>
                  <li>{convertToVnd(product.price)}</li>
                </ul>
                <p className="pro__info">{product.short_description}</p>
                <div className="ht__pro__desc">
                  <div className="sin__desc">
                    <p><span>Tình trạng:</span> {product.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}</p>
                  </div>
                  <div className="sin__desc align--left">
                    <p><span>Danh mục:</span></p>
                    <ul className="pro__cat__list">
                      <li><a href="">{product.category ? product.category.name : ''}</a></li>
                    </ul>
                  </div>
                  <div className="sin__desc align--left">
                    <p><span>Nơi sản xuất:</span></p>
                    <ul className="pro__cat__list">
                      <li><a href="">{product.manufacture || ''}</a></li>
                    </ul>
                  </div>

                  <div className="sin__desc product__share__link">
                    <p><span>Chia sẻ trên:</span></p>
                    <ul className="pro__share">
                      <li><a href="#" target="_blank"><i className="icon-social-twitter icons"></i></a></li>

                      <li><a href="#" target="_blank"><i className="icon-social-instagram icons"></i></a></li>

                      <li><a href="https://www.facebook.com/Furny/?ref=bookmarks" target="_blank"><i className="icon-social-facebook icons"></i></a></li>

                      <li><a href="#" target="_blank"><i className="icon-social-google icons"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
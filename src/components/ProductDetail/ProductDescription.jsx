import React from 'react'
import Comment from './Comment'

export default function ProductDescription({ product }) {
  if (!product) {
    return null
  }
  
  return (
    <section className="htc__produc__decription bg__white">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <ul className="pro__details__tab" role="tablist">
              <li role="presentation" className="description active"><a href="#description" role="tab" data-toggle="tab">Chi tiết sản phẩm</a></li>
              <li role="presentation" className="review"><a href="#review" role="tab" data-toggle="tab">Bình luận</a></li>
            </ul>
          </div>
        </div>
        <div className="row" style={{ marginBottom: 50 }}>
          <div className="col-xs-12">
            <div className="ht__pro__details__content" style={{ border: '1px solid #e1e1e1', paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
              <div role="tabpanel" id="description" className="pro__single__content tab-pane fade in active">
                <div className="pro__tab__content__inner">
                  <h4 className="ht__pro__title">Mô tả</h4>
                  <p dangerouslySetInnerHTML={{__html: product.description}} />
                  <h4 className="ht__pro__title">Ý nghĩa</h4>
                  <p dangerouslySetInnerHTML={{__html: product.detail || ''}} />
                  <h4 className="ht__pro__title">Cách chăm sóc</h4>
                  <p dangerouslySetInnerHTML={{__html: product.take_care || ''}} />
                </div>
              </div>
              <div role="tabpanel" id="review" className="pro__single__content tab-pane fade">
                <Comment productId={product.id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
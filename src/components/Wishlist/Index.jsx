import React, { useState, useEffect } from 'react'
import { useLogin } from "../../hooks/useLogin"
import { useCard } from "../../hooks/useCard"
import getAllWishlist from '../../schema/queries/getAllWishlist'
import convertToVnd from '../../Utils/convertToVnd'
import { Router } from '../../routes'

export default function Index() {
  const { me } = useLogin()
  const { addToCard } = useCard()
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const getInitialData = async () => {
      const initWishlist = await getAllWishlist(me.id)
      setWishlist(initWishlist)
    }

    if (me) {
      getInitialData()
    }
  }, [me])

  return (
    <div className="wishlist-area ptb--30 bg__white">
      <div className="container">
        <h1 style={{ marginBottom: 30, color: '#c43b68' }}>Wishlist của bạn</h1>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="wishlist-content">
              <form action="#">
                <div className="wishlist-table table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-remove"><span className="nobr">Xoá</span></th>
                        <th className="product-thumbnail">Ảnh</th>
                        <th className="product-name"><span className="nobr">Tên SP</span></th>
                        <th className="product-price"><span className="nobr">Đơn giá</span></th>
                        <th className="product-stock-stauts"><span className="nobr">Tình trạng</span></th>
                        <th className="product-add-to-cart"><span className="nobr">Thêm vào giỏ</span></th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlist && wishlist.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="product-remove"><a>×</a></td>
                            <td className="product-thumbnail"><a onClick={() => { Router.pushRoute(`/product_detail/${item.product.id}`)}}><img src={item.product.image} alt="" /></a></td>
                            <td className="product-name"><a onClick={() => { Router.pushRoute(`/product_detail/${item.product.id}`)}}>{item.product.name}</a></td>
                            <td className="product-price"><span className="amount">{convertToVnd(item.product.price)}</span></td>
                            <td className="product-stock-status"><span className="wishlist-in-stock">{item.product.quantity > 0 ? 'Còn hàng' : 'Hết hàng'}</span></td>
                            <td className="product-add-to-cart"><a onClick={() => { addToCard(item.product) }}>Thêm vào giỏ</a></td>
                          </tr>
                        )
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan="6">
                          <div className="wishlist-share">
                            <h4 className="wishlist-share-title">Chia sẻ trên:</h4>
                            <div className="social-icon">
                              <ul>
                                <li><a><i className="zmdi zmdi-rss"></i></a></li>
                                <li><a><i className="zmdi zmdi-vimeo"></i></a></li>
                                <li><a><i className="zmdi zmdi-tumblr"></i></a></li>
                                <li><a><i className="zmdi zmdi-pinterest"></i></a></li>
                                <li><a><i className="zmdi zmdi-linkedin"></i></a></li>
                              </ul>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
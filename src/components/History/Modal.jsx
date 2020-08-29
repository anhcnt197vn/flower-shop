import { useEffect, useState } from "react"
import getProductByOrderId from "../../schema/queries/getProductByOrderId"
import convertToVnd from "../../Utils/convertToVnd"

export default function Modal({ orderId }) {
  const [data, setData] = useState()

  useEffect(() => {
    const getDataInitial = async () => {
      const data = await getProductByOrderId(orderId)
      setData(data)
    }

    if (orderId) {
      getDataInitial()
    }
  }, [orderId])

  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{display: 'flex', justifyContent: 'center'}}>
            <h1 className="modal-title" id="exampleModalLabel" style={{ color: '#c43b68', fontSize: 30}}>Chi tiết đơn hàng</h1>
          </div>
          <div className="modal-body" style={{ paddingBottom: 0,}}>
            <form action="#">
              <div className="table-content table-responsive">
                <table style={{marginBottom: 10}}>
                  <thead>
                    <tr>
                      <th className="product-thumbnail">Hình ảnh</th>
                      <th className="product-name">Tên SP</th>
                      <th className="product-quantity">Số lượng</th>
                      <th className="product-price">Đơn giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data && data.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td className="product-thumbnail"><a><img width="99" height="119" src={item.image} alt="product img" /></a></td>
                          <td className="product-name"><span style={{ fontSize: 16, color: 'black' }}>{item.name}</span></td>
                          <td className="product-quantity"><span style={{ fontSize: 16, color: 'black' }}>{item.quantity}</span></td>
                          <td className="product-price"><span style={{ fontSize: 16, color: 'black' }}>{convertToVnd(item.price)}</span></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal" style={{ backgroundColor: '#c43b68', color: 'white', width: 150}}>Close</button>
          </div>
        </div>
      </div>
    </div>
  )
}
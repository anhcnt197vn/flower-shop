import React, { useState } from 'react'
import convertToVnd from '../../Utils/convertToVnd'
import { useOrder } from '../../hooks/useOrder'
import Modal from './Modal'

export default function OrderContainer() {
  const { order, from: fromDate, to: toDate, setFrom, setTo, onSearchOrder } = useOrder()
  const [orderId, setOrderId] = useState('')

  const getStatusLabel = (status) => {
    if (status === 0) {
      return 'Chờ xác nhận'
    }
    if (status === 1) {
      return 'Đã xác nhận'
    }
    if (status === 2) {
      return 'Đã giao hàng'
    }

    return ''
  }

  const onChageFromDate = (value) => {
    setFrom(new Date(value))
  }

  const onChageToDate = (value) => {
    setTo(new Date(value))
  }

  return (
    <>
      <Modal orderId={orderId} />
      <div className="cart-main-area ptb--50 bg__white">
        <div className="container">
          <div className="row" style={{ marginBottom: 20, paddingLeft: 20, paddingRight: 20 }}>
            <label htmlFor="example-date-input" className="col-1 col-form-label">From date</label>
            <div className="col-3">
              <input className="form-control" type="date" value={`${fromDate.getFullYear()}-${(fromDate.getMonth() + 1) < 10 ? '0' + (fromDate.getMonth() + 1) : (fromDate.getMonth() + 1)}-${fromDate.getDate() < 10 ? '0' + fromDate.getDate() : fromDate.getDate()}`} id="example-date-input" onChange={(event) => {onChageFromDate(event.target.value)}} />
            </div>
            <label style={{ marginLeft: 20 }} htmlFor="example-date-input" className="col-1 col-form-label">To date</label>
            <div className="col-3">
              <input className="form-control" type="date" value={`${toDate.getFullYear()}-${(toDate.getMonth() + 1) < 10 ? '0' + (toDate.getMonth() + 1) : (toDate.getMonth() + 1)}-${toDate.getDate() < 10 ? '0' + toDate.getDate() : toDate.getDate()}`}  id="example-date-input" onChange={(event) => { onChageToDate(event.target.value) }} />
            </div>
            <button style={{ marginLeft: 20, backgroundColor: "#c43b68", borderColor: 'transparent', color: 'white' }} className="col-1" onClick={() => { onSearchOrder()}}>Tìm kiếm</button>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <form action="#">
                <div className="table-content table-responsive">
                  <table>
                    <thead>
                      <tr>
                        <th className="product-name">Địa chỉ nhận hàng</th>
                        <th className="product-price">Tổng tiền</th>
                        <th className="product-status">Tình trạng</th>
                        <th className="product-note">Note</th>
                        <th className="product-create">Ngày tạo</th>
                        <th className="product-finish">Ngày giao</th>
                        <th className="product-detail">Chi tiết</th>
                      </tr>
                    </thead>
                    <tbody>
                      {order && order.map((item, index) => {
                        return (
                          <tr key={index}>
                            <td className="product-name"><span style={{ fontSize: 16, color: 'black' }}>{item.address}</span></td>
                            <td className="product-name"><span style={{ fontSize: 16, color: 'black' }} className="amount">{convertToVnd(item.total_price)}</span></td>
                            <td className="product-status"><span style={{ fontSize: 16, color: 'black' }}>{getStatusLabel(item.status)}</span></td>
                            <td className="product-note"><span style={{ fontSize: 16, color: 'black' }}>{item.note}</span></td>
                            <td className="product-create"><span style={{ fontSize: 16, color: 'black' }}>{(new Date(Number(item.created_at))).toLocaleString()}</span></td>
                            <td className="product-finish"><span style={{ fontSize: 16, color: 'black' }}>{status === 2 ? (new Date(Number(item.updated_at))).toLocaleString() : 'Chưa giao hàng'}</span></td>
                            <td className="product-remove"><a data-toggle="modal" data-target="#exampleModal" onClick={() => { setOrderId(item.id) }}><i className="fa fa-info-circle"></i></a></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
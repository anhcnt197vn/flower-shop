import React from 'react'

export default function GoodSale() {
  return (
    <section className="htc__good__sale bg__cat--3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <div className="fr__prize__inner">
              <h2>Chúng tôi nhận tư vấn, thiết kế cây cảnh</h2>
              <h3>(Tạo không gian thoải mái cho bạn)</h3>
              <a className="fr__btn" href="#">Xem thêm</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
            <div className="prize__inner">
              <div className="prize__thumb">
                <img src="../static/images/bannerSupport.jpg" width="694px" height="262px" alt="banner images" />
              </div>
              <div className="banner__info">
                <div className="pointer__tooltip pointer--3 align-left" style={{ left: '31%', top: '85%'}}>
                  <div className="tooltip__box">
                    <h4>Cây lưỡi hổ</h4>
                    <p>Lưỡi hổ là loài cây mọng nước có sức sống bền bỉ.</p>
                  </div>
                </div>
                <div className="pointer__tooltip pointer--4 align-top" style={{ left: '14%', top: '79%'}}>
                  <div className="tooltip__box">
                    <h4>Cây bàng Singapore</h4>
                    <p>Bàng Singapore là loại cây thân gỗ, lá lớn, tán rộng, tròn và đầy đặn. Dáng cây vươn cao, đầy sức sống, thanh lịch và sang trọng</p>
                  </div>
                </div>
                <div className="pointer__tooltip pointer--7 align-top" style={{ left: '70%', top: '80%'}}>
                  <div className="tooltip__box">
                    <h4>Cây Lan ý</h4>
                    <p>Cây Lan Ý mang vẻ đẹp thướt tha, dịu dàng. Là cây cảnh nội thất đẹp, trang trí nhà và văn phòng</p>
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
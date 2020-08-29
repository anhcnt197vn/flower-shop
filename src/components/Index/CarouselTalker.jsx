import React, { Component } from 'react'

class CarouselTalker extends Component {
  render() {
    return (
      <div style={{backgroundColor: '#f3f3f3', height: 300, display: 'flex', alignItems: 'center'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 single__tes">
              <div className="testimonial">
                <div className="testimonial__thumb" style={{ width: 89, height: 89}}>
                  <img src="../static/images/talker-1.jpg" style={{ width: 89, height: 89, borderRadius: '50%', maxWidth: 'unset'}} alt="testimonial images" />
                </div>
                <div className="testimonial__details">
                  <h4><a>Mr. Mark Zuckerberg</a></h4>
                  <p>Nhân viên ở Lâm Hoa Store rất thân thiện và tư vấn cho khách hàng một cách chuyên nghiệp và hết mình. Tôi rất thích cửa hàng này!</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 single__tes">
              <div className="testimonial">
                <div className="testimonial__thumb" style={{ width: 89, height: 89}}>
                  <img src="../static/images/talker-3.jpg" style={{ width: 89, height: 89, borderRadius: '50%', maxWidth: 'unset'}} alt="testimonial images" />
                </div>
                <div className="testimonial__details">
                  <h4><a>Mr. Bill Gates</a></h4>
                  <p>Tôi đã mua hàng ở đây rất nhiều lần và lần nào các sản phẩm và dịch vụ cửa hàng đều khiến tôi rất ưng ý!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CarouselTalker


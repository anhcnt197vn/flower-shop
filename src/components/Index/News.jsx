import React from 'react'

export default function News() {
  return (

    <section className="htc__blog__area bg__white ptb--100">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="section__title--2 text-center">
              <h2 className="title__line">TIN TỨC MỚI</h2>
              <p>Những bài viết, chia sẻ của cửa hàng</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="ht__blog__wrap clearfix">
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
              <div className="blog">
                <div className="blog__thumb">
                  <a >
                    <img src="../static/images/news/noi-de-hoa-hong.jpg" width="360" height="260" alt="blog images" />
                  </a>
                </div>
                <div className="blog__details">
                  <div className="bl__date">
                    <span>17-6-2020</span>
                  </div>
                  <h2><a >Cách trồng và chăm sóc hoa hồng chuẩn nhất</a></h2>
                  <p>Hoa hồng thuộc cây thân gỗ bụi lâu năm, có thể trồng quanh năm nhưng trồng vào mùa xuân và mùa thu là phù hợp nhất. Bên cạnh đó…</p>
                  <div className="blog__btn">
                    <a >Xem thêm</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
              <div className="blog">
                <div className="blog__thumb">
                  <a >
                    <img src="../static/images/news/bang-bao-gia-cham-soc-cay.jpg" width="360" height="260" alt="blog images" />
                  </a>
                </div>
                <div className="blog__details">
                  <div className="bl__date">
                    <span>17-6-2020</span>
                  </div>
                  <h2><a >Bảng báo giá dịch vụ chăm sóc cây cảnh</a></h2>
                  <p>Cây xanh hiện đã là một phần không thể thiếu đối với mỗi không gian từ nhà ở cho đến văn phòng nhất là đối với những thành phố đông đúc như: Hồ Chí Minh và…</p>
                  <div className="blog__btn">
                    <a >Xem thêm</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
              <div className="blog">
                <div className="blog__thumb">
                  <a >
                    <img src="../static/images/news/cach-chon-dao-tet.jpg" width="360" height="260" alt="blog images" />
                  </a>
                </div>
                <div className="blog__details">
                  <div className="bl__date">
                    <span>17-6-2020</span>
                  </div>
                  <h2><a >Cách chọn đào tết kéo tài lộc đến gia đình bạn</a></h2>
                  <p>Đào là một loại cây không thể thiếu trng mỗi dịp Tết đến xuân về, đặc biệt với những người miền Bắc. Một cây đào đẹp chưng ngày đầu…</p>
                  <div className="blog__btn">
                    <a >Xem thêm</a>
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
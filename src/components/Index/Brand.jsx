import React from 'react'

export default function Brand() {
  return (
    <div className="htc__brand__area bg__cat--4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="ht__brand__inner">
              <ul style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column',  textAlign: 'center'}}>
                <h1>CHÚNG TÔI CÓ CƠ SỞ TẠI 2 MIỀN ĐẤT NƯỚC</h1>
                <div style={{ marginTop: 30}}>
                  <div className="col-md-6">
                    <p style={{ textDecoration: 'underline', fontSize: 24,
                    color: '#c43b68',
                    paddingBottom: 20}}>CHI NHÁNH HÀ NỘI</p>
                    <p style={{ fontSize: 20 }}>Số 14 - Ngõ 92- Phố Đức Giang</p>
                    <p style={{ fontSize: 20 }}>Quận Long Biên</p>
                    <p style={{ fontSize: 22, color: 'black', paddingTop: 20 }}><b>0333666213</b></p>
                  </div>
                  <div className="col-md-6">
                    <p style={{ textDecoration: 'underline', fontSize: 20,
                    color: '#c43b68',
                    paddingBottom: 20}}>CHI NHÁNH HỒ CHÍ MINH</p>
                    <p style={{ fontSize: 20 }}>Villa 6 - Hẻm 21- Đào Duy Anh</p>
                    <p style={{ fontSize: 20 }}>Phường 9 - Phú Nhuận - Hồ Chí Minh</p>
                    <p style={{ fontSize: 22, color: 'black', paddingTop: 20 }}><b>0984888388</b></p>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
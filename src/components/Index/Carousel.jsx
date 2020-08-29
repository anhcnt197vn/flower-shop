import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { useProducts } from '../../hooks/useProduct'
import { useCard } from '../../hooks/useCard'
import { Router } from '../../routes'

function DemoCarousel() {
  const { product } = useProducts()
  const { addToCard } = useCard()
  const currentItem1 = product.find((item) => item.id === 11)
  const currentItem2 = product.find((item) => item.id === 12)

  return (
    <Carousel autoPlay interval={4000} swipeable={true} infiniteLoop={true} showThumbs={false} style={{ marginTop: 30 }}>
      <div style={{ height: '500px', backgroundColor: '#f3f3f3', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center ' }}>
          <div style={{ width: '60%' }}>
            <div className="slider__inner">
              <h2>Bộ sưu tập 2020</h2>
              <h1>Cây bon sai</h1>
              <div className="cr__btn">
                <a onClick={() => { 
                  addToCard(currentItem1)
                  Router.push('/checkout')
                }}>Mua ngay</a>
              </div>
            </div>
          </div>
          <div className="slide__thumb" style={{ width: '40%' }}>
            <img style={{ width: 560, height: 420, objectFit: 'contain' }} src={"../static/images/slider/slider-1.png"} alt="slider images" />
          </div>
        </div>
      </div>
      <div style={{ height: '500px', backgroundColor: '#f3f3f3', display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
        <div style={{ width: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center ' }}>
          <div style={{ width: '60%' }}>
            <div className="slider__inner">
              <h2>Bộ sưu tập 2020</h2>
              <h1>Cây bon sai</h1>
              <div className="cr__btn">
                <a onClick={() => { 
                  addToCard(currentItem2)
                  Router.push('/checkout')
                }}>Mua ngay</a>
              </div>
            </div>
          </div>
          <div className="slide__thumb" style={{ width: '40%' }}>
            <img style={{ width: 560, height: 420, objectFit: 'contain' }} src={"../static/images/slider/slider-5.png"} alt="slider images" />
          </div>
        </div>
      </div>
    </Carousel>
  )

}

export default DemoCarousel
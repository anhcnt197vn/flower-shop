import React from 'react'
import MenuBar from '../src/components/index/MenuBar'
import NewArrival from '../src/components/Index/NewArrival'
import CardSideBar from '../src/components/Index/CardSideBar'
import DemoCarousel from '../src/components/Index/Carousel'
import GoodSale from '../src/components/Index/GoodSale'
import BestSeller from '../src/components/Index/BestSeller'
import CarouselTalker from '../src/components/Index/CarouselTalker'
import TopRated from '../src/components/Index/TopRated'
import Brand from '../src/components/Index/Brand'
import News from '../src/components/Index/News'
import Footer from '../src/components/Index/Footer'
import { ProductStore } from '../src/hooks/useProduct'
import { CardStore } from '../src/hooks/useCard'

export default function Home() {
  return (
    <ProductStore>
      <CardStore>
        <div className="wrapper">
          <MenuBar />
          <CardSideBar />
          <DemoCarousel />
          <NewArrival />
          <GoodSale />
          <BestSeller />
          <CarouselTalker />
          <TopRated />
          <Brand />
          <News />
          <Footer />
        </div>
      </CardStore>
    </ProductStore>
  )
}

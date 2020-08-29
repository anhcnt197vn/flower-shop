import React from 'react'
import MenuBar from '../src/components/index/MenuBar'
import CardSideBar from '../src/components/Index/CardSideBar'
import Banner from '../src/components/Card/Banner'
import Footer from '../src/components/Index/Footer'
import { ProductStore } from '../src/hooks/useProduct'
import { CardStore } from '../src/hooks/useCard'
import Index from '../src/components/Wishlist/Index'

export default function Card() {
  return (
    <ProductStore>
      <CardStore>
        <div className="wrapper">
          <MenuBar />
          <CardSideBar />
          <Banner />
          <Index />
          <Footer />
        </div>
      </CardStore>
    </ProductStore>
  )
}
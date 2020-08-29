import React from 'react'
import MenuBar from '../src/components/index/MenuBar'
import CardSideBar from '../src/components/Index/CardSideBar'
import Banner from '../src/components/Card/Banner'
import Footer from '../src/components/Index/Footer'
import { CardStore } from '../src/hooks/useCard'
import { OrderStore } from '../src/hooks/useOrder'
import OrderContainer from '../src/components/History/OrderContainer'

export default function Card() {
  return (
    <CardStore>
      <OrderStore>
        <div className="wrapper">
          <MenuBar />
          <CardSideBar />
          <Banner />
          <OrderContainer />
          <Footer />
        </div>
      </OrderStore>
    </CardStore>
  )
}
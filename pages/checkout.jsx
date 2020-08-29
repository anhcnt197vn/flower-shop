import React from 'react'
import MenuBar from '../src/components/index/MenuBar'
import CardSideBar from '../src/components/Index/CardSideBar'
import { ProductStore } from '../src/hooks/useProduct'
import { CardStore } from '../src/hooks/useCard'
import CheckoutContainer from '../src/components/Checkout/CheckoutContainer'

export default function Checkout() {
  return (
    <ProductStore>
      <CardStore>
        <div className="wrapper">
          <MenuBar />
          <CardSideBar />
          <CheckoutContainer />
        </div>
      </CardStore>
    </ProductStore>
  )
}
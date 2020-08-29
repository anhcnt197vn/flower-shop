import React from 'react'
import MenuBar from '../src/components/index/MenuBar'
import CardSideBar from '../src/components/Index/CardSideBar'
import Banner from '../src/components/Card/Banner'
import Index from '../src/components/Product/Index'
import Footer from '../src/components/Index/Footer'
import { ProductStore } from '../src/hooks/useProduct'
import { CardStore } from '../src/hooks/useCard'

function Product({ query }) {
  return (
    <ProductStore shouldQueryFirstTime={query ? false : true}>
      <CardStore>
        <div className="wrapper">
          <MenuBar />
          <CardSideBar />
          <Banner />
          <Index query={query} />
          <Footer />
        </div>
      </CardStore>
    </ProductStore>
  )
}

Product.getInitialProps = ({ query }) => {
  return { query }
}

export default Product
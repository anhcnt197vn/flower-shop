import React, { useState, useEffect } from 'react'
import MenuBar from '../src/components/index/MenuBar'
import CardSideBar from '../src/components/Index/CardSideBar'
import Footer from '../src/components/Index/Footer'
import Product from '../src/components/ProductDetail/Product'
import ProductDescription from '../src/components/ProductDetail/ProductDescription'
import { ProductStore } from '../src/hooks/useProduct'
import { CardStore } from '../src/hooks/useCard'
import getProductById from '../src/schema/queries/getProductById'

function ProductDetail({ id }) {
  const [product, setProduct] = useState(null)

  useEffect(() => {
    const getInitialData = async () => {
      const initialProduct = await getProductById(id)
      setProduct(initialProduct)
    }

    getInitialData()
  }, [])

  return (
    <ProductStore>
      <CardStore>
        <div className="wrapper">
          <MenuBar />
          <CardSideBar />
          <Product product={product} />
          <ProductDescription product={product} />
          <Footer />
        </div>
      </CardStore>
    </ProductStore>
  )
}

ProductDetail.getInitialProps = async ({ query }) => {
  const { id } = query
  return { id: Number(id) }
}

export default ProductDetail
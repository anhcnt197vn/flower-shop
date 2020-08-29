import React from 'react'
import ProductGridView from '../../../src/components/Product/ProductGridView'
import ProductListView from '../../../src/components/Product/ProductListView'
import { useProducts } from '../../hooks/useProduct'

export default function ProductViewContainer() {
  const { product } = useProducts()

  if (!product || product.length === 0) {
    return <div style={{ marginTop: 20 }}><p style={{ color: '#c43b68', fontSize: 18 }}>Hiện tại không có sản phẩm nào...</p></div>
  }

  return (
    <div className="row">
      <div className="shop__grid__view__wrap">
        <ProductGridView />
        <ProductListView />
      </div>
    </div>
  )
}
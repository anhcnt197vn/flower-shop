import React from 'react'
import SearchLeftSide from '../../../src/components/Product/SearchLeftSide'
import Categories from '../../../src/components/Product/Categories'

export default function LeftSideContainer() {
  return (
    <div className="col-lg-3 col-lg-pull-9 col-md-3 col-md-pull-9 col-sm-12 col-xs-12 smt-40 xmt-40">
      <div className="htc__product__leftsidebar">
        <SearchLeftSide />
        <Categories />
      </div>
    </div>
  )
}
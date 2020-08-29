import React, { useState, useEffect } from 'react'
import ProductViewContainer from '../../../src/components/Product/ProductViewContainer'
import LeftSideContainer from '../../../src/components/Product/LeftSideContainer'
import { useProducts } from '../../hooks/useProduct'
import { BIG_PAGE_ITEMS, SMALL_PAGE_ITEMS } from '../../Utils/pagination'
import ReactPaginate from 'react-paginate'

function Index({ query }) {
  const { product, currentPage, setSearchName, setCurrentPage, onHandleSearchSchema } = useProducts()
  console.log('product', product)
  const [isGridView, setIsGridView] = useState(true)

  const pageItem = isGridView ? BIG_PAGE_ITEMS : SMALL_PAGE_ITEMS
  const startIndex = ((currentPage - 1) * pageItem) + 1
  const totalPage = Math.floor(product.length / pageItem) + 1

  useEffect(() => {
    const getInitialData = () => {
      if (query && query.name) {
        setSearchName({ product_name: query.name })
        onHandleSearchSchema({ product_name: query.name })
      } else {
        setSearchName(null)
        onHandleSearchSchema()
      }
    }

    getInitialData()
  }, [query])

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected + 1)
  }

  return (
    <section className="htc__product__grid bg__white ptb--50">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 col-lg-push-3 col-md-9 col-md-push-3 col-sm-12 col-xs-12">
            <div className="htc__product__rightidebar">
              <div className="htc__grid__top">
                <div className="htc__select__option">
                  <select className="ht__select">
                    <option>Sắp xếp mặc định</option>
                    <option>Theo ngày ra mắt</option>
                    <option>Theo giá tăng dần</option>
                    <option>Theo giá giảm dần</option>
                  </select>
                </div>
                <div className="htc__select__option" />
                <div className="ht__pro__qun">
                  <span>{`Hiển thị ${startIndex}-${startIndex + (pageItem > product.length ? product.length : pageItem) - 1} trên ${product.length} sản phẩm`}</span>
                </div>
                <ul className="view__mode" role="tablist">
                  <li role="presentation" className="grid-view active"><a href="#grid-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-grid" onClick={() => { if (!isGridView) { 
                    setCurrentPage(1)
                    setIsGridView(true) 
                  }}}></i></a></li>
                  <li role="presentation" className="list-view"><a href="#list-view" role="tab" data-toggle="tab"><i className="zmdi zmdi-view-list" onClick={() => { if (isGridView) { 
                    setCurrentPage(1)
                    setIsGridView(false) 
                  }}}></i></a></li>
                </ul>
              </div>
              <ProductViewContainer />
            </div>
            {product.length > 0 && (
              <div className="row">
                <div className="col-xs-12">
                  <ReactPaginate
                    nextLabel={'>'}
                    previousLabel={'<'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={totalPage}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageClick}
                    containerClassName={'htc__pagenation'}
                    activeClassName={'active'}
                  />
                </div>
              </div>
            )}
          </div>
          <LeftSideContainer />
        </div>
      </div>
    </section>
  )
}

export default Index
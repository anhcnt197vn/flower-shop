import React from 'react'
import { useProducts } from '../../hooks/useProduct'
import { Router } from '../../routes'

export default function Search() {
  const { searchName, setSearchName } = useProducts()

  return (
    <div className="search__area">
      <div className="container" >
        <div className="row" >
          <div className="col-md-12" >
            <div className="search__inner">
              <form>
                <input placeholder="Tìm kiếm sản phẩm... " value={(searchName && searchName.product_name) || ''} type="text" onChange={(event) => {
                  setSearchName({ product_name: event.target.value })
                }} />
                <button onClick={async (event) => {
                  event.preventDefault()
                  if (searchName && searchName.product_name) {
                    Router.pushRoute(`/product/?name=${searchName && searchName.product_name || ''}`)
                  } else {
                    Router.pushRoute('/product')
                  }
                }}></button>
              </form>
              <div className="search__close__btn">
                <span className="search__close__btn_icon"><i onClick={() => {
                  const body = document.getElementsByTagName("BODY")[0]
                  if (body) {
                    body.classList.toggle('search__box__show__hide')
                  }
                }} className="zmdi zmdi-close"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
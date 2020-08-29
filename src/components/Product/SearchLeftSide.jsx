import React from 'react'
import converToVnd from '../../Utils/convertToVnd'
import { useProducts } from '../../hooks/useProduct'

export default function SearchLeftSide() {
  const { searchFilter, setSearchFilter } = useProducts()

  return (
    <div className="htc-grid-range">
      <h4 className="title__line--4">Mức giá</h4>
      <div className="content-shopby">
        <div className="price_filter s-filter clear">
          <div>
            <input type="radio" id="age1" name="age"
              onChange={() => {
                setSearchFilter(Object.assign({}, searchFilter, { price: { min: 0, max: 100000 }}))
              }}
            />
            <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor="age1">{`Nhỏ hơn ${converToVnd(100000)}`}</label>
          </div>
          <div>
            <input type="radio" id="age2" name="age"
              onChange={() => {
                setSearchFilter(Object.assign({}, searchFilter, { price: { min: 100000, max: 200000 }}))
              }}
            />
            <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor="age2">{`${converToVnd(100000)} - ${converToVnd(200000)}`}</label>
          </div>
          <div>
            <input type="radio" id="age3" name="age"
              onChange={() => {
                setSearchFilter(Object.assign({}, searchFilter, { price: { min: 200000, max: 300000 }}))
              }}
            />
            <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor="age3">{`${converToVnd(200000)} - ${converToVnd(300000)}`}</label>
          </div>
          <div>
            <input type="radio" id="age4" name="age"
              onChange={() => {
                setSearchFilter(Object.assign({}, searchFilter, { price: { min: 300000, max: 500000 }}))
              }}
            />  
            <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor="age4">{`${converToVnd(300000)} - ${converToVnd(500000)}`}</label>
          </div>
          <div>
            <input type="radio" id="age5" name="age" 
              onChange={() => {
                setSearchFilter(Object.assign({}, searchFilter, { price: { min: 500000, max: Infinity }}))
              }}
            />
            <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor="age5">{`Lớn hơn ${converToVnd(500000)}`}</label>
          </div>
          <div>
            <input type="radio" id="age6" name="age" 
              onChange={() => {
                setSearchFilter(Object.assign({}, searchFilter, { price: null }))
              }}
            />
            <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor="age6">{`Tất cả`}</label>
          </div>
        </div>
      </div>
    </div>
  )
}
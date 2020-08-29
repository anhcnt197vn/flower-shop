import React, { useState, useEffect } from "react"
import getAllCategories from '../../schema/queries/getAllCategories'
import { useProducts } from "../../hooks/useProduct"

export default function Categories() {
  const { searchFilter, setSearchFilter } = useProducts()
  const [category, setCategory] = useState([])

  useEffect(() => {
    const getInitialData = async () => {
      const initialCategory = await getAllCategories()
      setCategory(initialCategory)
    }

    getInitialData()
  }, [])

  return (
    <div className="htc__category">
      <h4 className="title__line--4">Danh mục</h4>
      <ul className="ht__cat__list">
        {category.map((item, index) => {
          return (
            <div key={index}>
              <input type="radio" id={`category${index + 1}`} name="category"
                onChange={() => {
                  setSearchFilter(Object.assign({}, searchFilter, { category: item.id }))
                }}
              />
              <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor={`category${index + 1}`}>{item.name}</label>
            </div>
          )
        })}
        <div>
          <input type="radio" id={`category${category.length + 1}`} name="category"
            onChange={() => {
              setSearchFilter(Object.assign({}, searchFilter, { category: null }))
            }}
          />
          <label style={{ marginLeft: 10, marginBottom: 10 }} htmlFor={`category${category.length + 1}`}>Tất cả</label>
        </div>
      </ul>

    </div>
  )
}
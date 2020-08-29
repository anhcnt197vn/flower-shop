import React, {
  useContext,
  useState,
  useEffect,
  useRef,
} from 'react'
import getAllProducts from '../schema/queries/getAllProducts'
import searchProduct from '../schema/queries/searchProduct'

const initialState = []

const defaultValue = {
  product: initialState,
  setProduct: null,
  currentPage: 1,
  setCurrentPage: null,
  searchFilter: null,
  setSearchFilter: null,
}

const ProductContext = React.createContext(defaultValue)

export const ProductStore = ({
  children,
  shouldQueryFirstTime = true,
}) => {
  const [
    state,
    setState,
  ] = useState([])
  const productRef = useRef(state)
  const [searchFilter, setSearchFilter] = useState(null)
  const [searchName, setSearchName] = useState(null)

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1)

  useEffect(() => {
    const executeGetAllProducts = async () => {
      if (shouldQueryFirstTime) {
        const products = await getAllProducts()
        productRef.current = products
        setState(products)
      }
    }

    executeGetAllProducts()
  }, [])

  useEffect(() => {
    if (searchFilter && (searchFilter.price || searchFilter.category)) {
      let searchedItem = []
      if (searchFilter.price && searchFilter.category) {
        const searchedItemByCategory = productRef.current.filter((item) => item.category_id === searchFilter.category)
        if (searchFilter.price.min && searchFilter.price.max) {
          searchedItemByCategory.forEach((item) => {
            if (item.price > searchFilter.price.min && item.price <= searchFilter.price.max) {
              searchedItem.push(item)
            }
          })
        } else {
          searchedItemByCategory.forEach((item) => {
            if (item.price <= searchFilter.price.max) {
              searchedItem.push(item)
            }
          })
        }
      } else if (searchFilter.price && !searchFilter.category) {
        if (searchFilter.price.min && searchFilter.price.max) {
          productRef.current.forEach((item) => {
            if (item.price > searchFilter.price.min && item.price <= searchFilter.price.max) {
              searchedItem.push(item)
            }
          })
        } else {
          productRef.current.forEach((item) => {
            if (item.price <= searchFilter.price.max) {
              searchedItem.push(item)
            }
          })
        }
      } else if (searchFilter.category && !searchFilter.price) {
        searchedItem = productRef.current.filter((item) => item.category_id === searchFilter.category)
      }

      setState(searchedItem)
    } else {
      setState(productRef.current)
    }
  }, [searchFilter])

  const updateProductRef = (newProducts) => {
    productRef.current = newProducts
  }

  return (
    <ProductContext.Provider
      value={{
        product: state,
        setProduct: setState,
        currentPage,
        setCurrentPage,
        searchFilter,
        setSearchFilter,
        searchName,
        setSearchName,
        updateProductRef,
      }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const {
    product,
    setProduct,
    currentPage,
    setCurrentPage,
    searchFilter,
    setSearchFilter,
    searchName,
    setSearchName,
    updateProductRef,
  } = useContext(ProductContext)

  const onHandleSearchSchema = async (searchFilterInput) => {
    const productSearched = await searchProduct(searchName || searchFilterInput)
    console.log('debug-productSearched', productSearched)
    if (productSearched && productSearched.length > 0) {
      if (searchFilter && (searchFilter.price || searchFilter.category)) {
        let searchedItem = []
        if (searchFilter.price && searchFilter.category) {
          const searchedItemByCategory = productSearched.filter((item) => item.category_id === searchFilter.category)
          if (searchFilter.price.min && searchFilter.price.max) {
            searchedItemByCategory.forEach((item) => {
              if (item.price > searchFilter.price.min && item.price <= searchFilter.price.max) {
                searchedItem.push(item)
              }
            })
          } else {
            searchedItemByCategory.forEach((item) => {
              if (item.price <= searchFilter.price.max) {
                searchedItem.push(item)
              }
            })
          }
        } else if (searchFilter.price && !searchFilter.category) {
          if (searchFilter.price.min && searchFilter.price.max) {
            productSearched.forEach((item) => {
              if (item.price > searchFilter.price.min && item.price <= searchFilter.price.max) {
                searchedItem.push(item)
              }
            })
          } else {
            productSearched.forEach((item) => {
              if (item.price <= searchFilter.price.max) {
                searchedItem.push(item)
              }
            })
          }
        } else if (searchFilter.category && !searchFilter.price) {
          searchedItem = productSearched.filter((item) => item.category_id === searchFilter.category)
        }
        updateProductRef(productSearched)
        setProduct(searchedItem)
      } else {
        updateProductRef(productSearched)
        setProduct(productSearched)
      }
    } else {
      updateProductRef([])
      setProduct([])
    }
  }

  return {
    product,
    setProduct,
    currentPage,
    setCurrentPage,
    searchFilter,
    setSearchFilter,
    searchName,
    setSearchName,
    onHandleSearchSchema,
  }
}
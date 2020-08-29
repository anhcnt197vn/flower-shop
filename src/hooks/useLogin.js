import React, {
  useContext,
  useState,
  useEffect,
} from 'react'
import createCustomer from '../schema/mutations/createCustomer'
import getCustomerByFilter from '../schema/queries/getCustomerByFilter'

const initialState = null

const defaultValue = {
  me: initialState,
  isLogin: false,
  setIsLogin: null,
  setMe: null,
  isOpenUserCard: false,
  setIsOpenUserCard: null,
}

const LoginContext = React.createContext(defaultValue)

export const LoginStore = ({
  children,
}) => {
  const [
    state,
    setState,
  ] = useState(null)
  const [isLogin, setIsLogin] = useState(false)

  const [
    isOpenUserCard,
    setIsOpenUserCard,
  ] = useState(false)

  useEffect(() => {
    let me = localStorage.getItem('@me')
    if (me) {
      me = JSON.parse(me)
      if (me.is_activate) {
        setState(me)
        setIsLogin(true)
      }
    }
  }, [])

  useEffect(() => {
    if (state) {
      localStorage.setItem('@me', JSON.stringify(state))
    }
  }, [state])

  return (
    <LoginContext.Provider
      value={{
        isLogin,
        setIsLogin,
        me: state,
        setMe: setState,
        isOpenUserCard,
        setIsOpenUserCard,
      }}
    >
      {children}
    </LoginContext.Provider>
  )
}

export function useLogin() {
  const {
    isLogin,
    setIsLogin,
    me,
    setMe,
    isOpenUserCard,
    setIsOpenUserCard,
  } = useContext(LoginContext)

  const login = async ({ email, password }) => {
    try {
      const customer = await getCustomerByFilter({ email, password })
      if (customer) {
        setMe(customer)
        setIsLogin(true)
      }
    } catch(error) {
      alert(error)
    }
  }

  const register = async ({ name, email, password }) => {
    try {
      const customer = await createCustomer({ name, email, password })
      if (customer) {
        setMe({ name, email })
      }
    } catch(error) {
      alert(error)
    }
  }

  const onLogout = async () => {
    try {
      localStorage.removeItem('@me')
      setMe(null)
      setIsLogin(false)
    } catch (error) {
      alert(error)
    }
  }

  return {
    isLogin,
    setIsLogin,
    me,
    setMe,
    login,
    isOpenUserCard,
    setIsOpenUserCard,
    register,
    onLogout,
  }
}
import React from 'react'
import Index from '../src/components/SignupActivate'

function SignupActivate({ query }) {
  return (
    <Index query={query} />
  )
}

SignupActivate.getInitialProps = ({ query }) => {
  return { query }
}

export default SignupActivate

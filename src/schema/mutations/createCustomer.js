import { getClient } from '../../graphqlUtil'
import gql from 'graphql-tag'

const createCustomer = async (customer) => {
  const result = await getClient().mutate({
    mutation: gql`
    mutation Mutation(
      $name: String!, 
      $email: String!, 
      $password: String!, 
    ) {
      createCustomer(
        name: $name, 
        email: $email, 
        password: $password, 
      ) {
        id
        name
        email
        password
      }
    }
  `,
    variables: {
      name: customer.name,
      email: customer.email,
      password: customer.password,
    },
    fetchPolicy: 'no-cache',
  })

  return result.data.createCustomer
}

export default createCustomer
import { getClient } from '../../graphqlUtil'
import gql from 'graphql-tag'

const createWishlist = async ({ customer_id, product_id }) => {
  const result = await getClient().mutate({
    mutation: gql`
    mutation Mutation(
      $customer_id: Int, 
      $product_id: Int, 
    ) {
      createWishlist(
        customer_id: $customer_id, 
        product_id: $product_id, 
      ) {
        id
      }
    }
  `,
    variables: {
      customer_id,
      product_id,
    },
    fetchPolicy: 'no-cache',
  })

  return result.data.createWishlist
}

export default createWishlist
import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getAllWishlist(customer_id) {
  const result = await getClient().query({
    query: gql`
      query Query(
        $customer_id: Int
      ) {
        getAllWishlist(
          customer_id: $customer_id
        ) {
          product {
            id
          name
          quantity
          price
          category_id
          image
          description
          manufacture
          short_description
          best_seller
          detail
          previous_price
          take_care
          }
          id
          product_id
          customer_id
        }
      }
    `,
    variables: {
      customer_id,
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getAllWishlist
}
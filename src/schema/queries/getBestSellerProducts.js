import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getBestSellerProducts() {
  const result = await getClient().query({
    query: gql`
      query Query {
        getBestSellerProducts {
          product_id
        }
      }
    `,
    variables: {},
    fetchPolicy: 'no-cache',
  })
  
  return result.data.getBestSellerProducts
}
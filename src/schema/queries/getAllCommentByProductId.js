import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function getAllCommentByProductId(product_id) {
  const result = await getClient().query({
    query: gql`
      query Query($product_id: Int) {
        getAllCommentByProductId(product_id: $product_id) {
          product_id
          content
          customer{
            id
            name
            avatar
          }
          created_at
          updated_at
        }
      }
    `,
    variables: {
      product_id,
    },
    fetchPolicy: 'no-cache',
  })

  return result.data.getAllCommentByProductId
}
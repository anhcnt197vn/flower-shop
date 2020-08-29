import { getClient } from '../../graphqlUtil'
import gql from 'graphql-tag'

const createComment = async (input) => {
  const result = await getClient().mutate({
    mutation: gql`
    mutation Mutation(
      $customer_id: Int, 
      $product_id: Int, 
      $content: String, 
    ) {
      createComment(
        customer_id: $customer_id, 
        product_id: $product_id, 
        content: $content, 
      ) {
        id
        product_id
        content
        customer_id
      }
    }
  `,
    variables: {
      customer_id: input.customer_id,
      product_id: input.product_id,
      content: input.content,
    },
    fetchPolicy: 'no-cache',
  })

  return result.data.createComment
}

export default createComment
import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function deleteProduct(id) {
  const result = await getClient().mutate({
    mutation: gql`
      mutation Mutation(
        $id: Int!, 
      ) {
        deleteProduct(
          id: $id, 
        ) {
          id
        }
      }
    `,
    variables: {
      id,
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.deleteProduct
}
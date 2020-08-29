import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function activateCustomer(id) {
  const result = await getClient().mutate({
    mutation: gql`
      mutation Mutation(
        $activate_id: String, 
      ) {
        activateCustomer(
          activate_id: $activate_id, 
        ) {
          id
          name
          email
          is_activate
          password
        }
      }
    `,
    variables: {
      activate_id: id,
    },
    fetchPolicy: 'no-cache',
  })

  return result.data.activateCustomer
}
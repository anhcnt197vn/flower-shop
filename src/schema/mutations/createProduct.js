import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function createProduct(product) {
  const result = await getClient().mutate({
    mutation: gql`
      mutation Mutation(
        $name: String!, 
        $quantity: Int, 
        $category_id: Int!, 
        $image: String, 
        $price: Float, 
        $description: String, 
        $manufacture: String,
      ) {
        createProduct(
          name: $name, 
          quantity: $quantity, 
          category_id: $category_id, 
          image: $image, 
          description: $description, 
          manufacture: $manufacture,
          price: $price,
        ) {
          id
          name
          quantity
          price
          category_id
          image
          description
          manufacture
          category {
            name
            status
          }
        }
      }
    `,
    variables: {
      name: product.name,
      quantity: product.quantity,
      category_id: product.category_id,
      image: product.image,
      description: product.description,
      manufacture: product.manufacture,
      price: product.price,
    },
    fetchPolicy: 'no-cache',
  })
  
  return result.data.createProduct
}
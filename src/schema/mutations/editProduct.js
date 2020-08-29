import { getClient } from "../../graphqlUtil"
import gql from 'graphql-tag'

export default async function editProduct(product) {
  const result = await getClient().mutate({
    mutation: gql`
      mutation Mutation(
        $id: Int!, 
        $name: String, 
        $quantity: Int, 
        $category_id: Int, 
        $image: String, 
        $price: Float, 
        $description: String, 
        $manufacture: String,
      ) {
        editProduct(
          id: $id, 
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
      id: product.id,
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
  
  return result.data.editProduct
}
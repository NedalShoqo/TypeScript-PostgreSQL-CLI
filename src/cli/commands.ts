import {Command} from 'commander'
import {addProduct , deleteProduct , listProducts , getProductById , updateProduct} from '../services/productsService.js'

export const program = new Command()
program
  .command('list')
  .description('List all products')
  .action(listProducts)

program
  .command('add <name> <price>')
  .description('Add a new product')
  .action((name, price) => {
    addProduct(name, Number(price))
  })

program
  .command('delete <id>')
  .description('Delete a product by ID')
  .action((id) => {
    deleteProduct(Number(id))
  })    

program
  .command('get <id>')
  .description('Get a product by ID')
  .action((id) => {
    getProductById(Number(id))
  })

program
  .command('update <id> <name> <price>')    
    .description('Update a product by ID')
    .action((id, name, price) => {
        updateProduct(Number(id), name, Number(price))
    })

    
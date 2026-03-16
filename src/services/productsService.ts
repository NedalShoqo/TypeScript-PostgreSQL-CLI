import {Product} from '../models/product.js'

export const listProducts = async () => {
  try {
    const products = await Product.findAll()
    console.log(products.map(p => p.toJSON()))}
   catch (error) {
    console.error('Error fetching products:', error)
  }
}

export const addProduct = async ( name: string, price: number) => {
    try {
        const newProduct = await Product.create({name, price })
        console.log('Product added:', newProduct.toJSON())
    } catch (error) {
        console.error('Error adding product:', error)
    }
}

export const deleteProduct = async (id: number) => {
    try {
        const productToDelete = await Product.findByPk(id)  
        if (productToDelete) {
            await productToDelete.destroy()
            console.log(`Product with id ${id} deleted successfully.`)
        } else {
            console.log(`Product with id ${id} not found.`)
        }

    } catch (error) {
        console.error('Error deleting product:', error)
    }       
}
    export const getProductById =async (id:number) => {
        try {
            const product = await Product.findByPk(id)
            if (product) {
                console.log(product.toJSON())
            } else {
                console.log(`Product with id ${id} not found.`)
            }
        } catch (error) {
            console.error('Error fetching product:', error)
        }

    }

export const updateProduct = async (id: number, name: string, price: number) => {
    try {
        const productToUpdate = await Product.findByPk(id)
        if (productToUpdate) {
            productToUpdate.name = name
            productToUpdate.price = price
            await productToUpdate.save()
            console.log(`Product with id ${id} updated successfully.`)
        }
        else {
            console.log(`Product with id ${id} not found.`)
        }
    } catch (error) {
        console.error('Error updating product:', error)
    }
}


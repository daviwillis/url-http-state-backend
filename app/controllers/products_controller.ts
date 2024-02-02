import type { HttpContext } from '@adonisjs/core/http'

import Product from '#models/product'

export default class ProductsController {
  public async index({}: HttpContext) {
    const products = (await Product.all()).toSorted((a, b) =>
      a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
    )

    return {
      data: products,
    }
  }

  public async store({ request, response }: HttpContext) {
    const body = request.body()

    const product = await Product.create(body)

    response.status(201)
    return {
      message: 'Produto criado com sucesso',
      data: product,
    }
  }

  public async update({ params, request }: HttpContext) {
    const body = request.body()

    const product = await Product.find(params.id)

    if (product) {
      product.name = body.name
      product.price = body.price
      await product.save()
      return {
        message: 'Produto atualizado com sucesso!',
        data: product,
      }
    } else {
      return {
        message: 'Erro ao atualizar produto',
      }
    }
  }

  public async destroy({ params }: HttpContext) {
    const product = await Product.find(params.id)

    await product?.delete()

    return {
      message: 'Produto excluído com sucesso',
    }
  }
}

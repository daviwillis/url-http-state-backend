import { DateTime } from 'luxon'
import { BaseModel, beforeCreate, column } from '@adonisjs/lucid/orm'
import { v4 as uuid } from 'uuid'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  declare id: string

  @beforeCreate()
  public static async createUUID(model: Product) {
    model.id = uuid()
  }

  @column()
  declare name: string

  @column()
  declare price: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}

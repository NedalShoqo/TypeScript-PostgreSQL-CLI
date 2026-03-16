import { sequelize } from "../config/dbconfig.js"
import { DataTypes, Model } from "sequelize"

export class Product extends Model {
  declare id: number
  declare name: string
  declare price: number
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "products",
    timestamps:  true // this is default, can omit
  }
)
await sequelize.sync({ alter: true });
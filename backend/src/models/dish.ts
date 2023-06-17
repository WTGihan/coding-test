"use strict";
import { Model } from "sequelize";
interface DishAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  menu_id: number;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Dish extends Model<DishAttributes> implements DishAttributes {
    id!: number;
    name!: string;
    description!: string;
    price!: number;
    image_url!: string;
    menu_id!: number;
    createdAt!: Date;
    updatedAt!: Date;

    static associate(models: any) {
      Dish.belongsTo(models.Menu, { foreignKey: "menu_id" });
    }
  }
  Dish.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        allowNull: false,
        type: DataTypes.DECIMAL(10, 2),
      },
      image_url: {
        allowNull: true,
        type: DataTypes.TEXT,
      },
      menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Dish",
      tableName: "Dishes",
    }
  );
  return Dish;
};

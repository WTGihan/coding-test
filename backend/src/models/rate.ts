"use strict";
import { Model } from "sequelize";
interface RateAttributes {
  id: number;
  rate: number;
  comments: string;
  customer_name: string;
  dish_id: number;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Rate extends Model<RateAttributes> implements RateAttributes {
    id!: number;
    rate!: number;
    comments!: string;
    customer_name!: string;
    dish_id!: number;
    createdAt!: Date;
    updatedAt!: Date;

    static associate(models: any) {
      Rate.belongsTo(models.Dish, { foreignKey: "dish_id" });
    }
  }
  Rate.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      rate: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      comments: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      customer_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dish_id: {
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
      modelName: "Rate",
      tableName: "Rates",
    }
  );
  return Rate;
};

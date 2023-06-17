"use strict";
import { Model } from "sequelize";

interface ResturantAttributes {
  id: number;
  name: string;
  address: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Resturant
    extends Model<ResturantAttributes>
    implements ResturantAttributes
  {
    id!: number;
    name!: string;
    address!: string;
    description!: string;
    createdAt!: Date;
    updatedAt!: Date;
  }
  Resturant.init(
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
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Resturant",
      tableName: "Resturants",
    }
  );
  return Resturant;
};

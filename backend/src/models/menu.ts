"use strict";
import { Model } from "sequelize";

interface MenuAttributes {
  id: number;
  name: string;
  resturant_id: number;
  createdAt: Date;
  updatedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Menu extends Model<MenuAttributes> implements MenuAttributes {
    id!: number;
    name!: string;
    resturant_id!: number;
    createdAt!: Date;
    updatedAt!: Date;

    static associate(models: any) {
      Menu.belongsTo(models.Resturant, {
        foreignKey: "resturant_id",
        as: "resturant",
      });
    }
  }
  Menu.init(
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
      resturant_id: {
        type: DataTypes.STRING,
        allowNull: false,
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
      modelName: "Menu",
      tableName: "Menus",
    }
  );
  return Menu;
};
